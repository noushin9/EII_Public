const cds = require('@sap/cds');
const { data } = require('@sap/cds/lib/dbs/cds-deploy');
 
module.exports = class ExpenseService extends cds.ApplicationService {
  init() {
    const {Budgets, Users, Expenses, Accounts} =this.entities;

    this.on('READ', 'Budgets', async (req) => {
      const results = await cds.tx(req).run(
        SELECT.from('Budgets').columns('month', 'year',
          { ref: ['user'], expand: [{ ref: ['firstName'] }, { ref: ['lastName'] }, { ref: ['email'] }, {ref:['mobileNo']},{ref:['accounts'],},{ref:['budgets']}] }
        )
      );
      return results;
    });

    this.before('CREATE', 'Users', async (req) => {
      const { firstName, lastName, email, mobileNo} = req.data;

      if(!firstName || !lastName){
        req.reject(400, 'FirstName and LastName are mandatory')
      }
      if(!email){
        req.reject(400, 'Email is Required')
      }

      req.data.name = `${firstName} ${lastName}`.trim();

      const tx = cds.tx(req);
      const existingEmail = await tx.run(Users).where({email});
      if(existingEmail.length > 0){
        req.reject(400, 'Email already exists') 
      }

      if(mobileNo){
        const existingMobileNo = await tx.run(Users).where({ mobileNo });
        if(existingMobileNo){
        req.reject(400, 'mobile number already registred')
      }
      }
      
    });

    this.before('READ',['Budgets', 'Expenses', 'Accounts'], async (req) => {
      const userId = req.user.ID;
      if(userId){
        req.query.where({ user: { email: userId } });
      }
    });

    this.before('CREATE', 'Budgets', async(req) =>{
      const { month, year, amount } = req.data;
      if(!month || !year || !amount){
        req.reject(400, 'month , year and amount are required');
      }

      req.data.user = { email: req.user.ID};
    });

    this.before('CREATE', 'Expenses', async(req) =>{
      const { title, amount, date } = req.data;
      if(!title || !amount || !date){
        req.reject(400, 'title, amount and date are mandatory');
      }

      req.data.user = { email: req.user.ID};
    });

    this.before('CREATE', 'Accounts', async(req) =>{
      const { accountType, balance } = req.data;
      if(!accountType || !balance){
        req.reject(400, 'accountType and balance are mandatory');
      }

      req.data.user = { email: req.user.ID};
    });

    this.before('CREATE', 'Expenses', async (req) => {
      const { amount, date } = req.data;
      const userEmail = req.user.ID;

      const tx = cds.tx(req);

      const expenseDate = new Date(date);
      const month = expenseDate.getMonth() + 1; 
      const year = expenseDate.getFullYear();

      const budgets = await tx.run(
        SELECT.from('Budgets').where({
          user: { email: userEmail },
          month: month,
          year: year
        })
      );

      if (budgets.length === 0) {
        req.reject(400, 'No budget set for this month and year');
      }

      const totalExpenses = await tx.run(
        SELECT.from('Expenses')
          .where({
            user: { email: userEmail },
            date: { '>=': `${year}-${String(month).padStart(2, '0')}-01`, '<=': `${year}-${String(month).padStart(2, '0')}-${new Date(year, month, 0).getDate()}` }
          })
          .columns({ sum: { func: 'sum', args: ['amount'] } })
      );

      const currentExpenseTotal = totalExpenses[0].sum || 0;
      const budgetAmount = budgets[0].amount;

      if (currentExpenseTotal + amount > budgetAmount) {
        req.reject(400, 'Expense exceeds the set budget for this month');
      }
    });

    this.on('CLEAR', 'Expenses', async (req) => {
      const userEmail = req.user.ID;

      const tx = cds.tx(req);

      await tx.run(
        DELETE.from('Expenses').where({ user: { email: userEmail } })
      );

      return { message: 'All expenses cleared successfully.' };
    });

    this.after('UPDATE', 'Accounts', async (data, req) => {
      const { balance } = data;
      if (balance < 0) {
        req.reject(400, 'Account balance cannot be negative');
      }
    });
   
    
    return super.init()
  }
}