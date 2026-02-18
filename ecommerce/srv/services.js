const cds = require('@sap/cds');
const { data } = require('@sap/cds/lib/dbs/cds-deploy');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = class AdminService extends cds.ApplicationService { init() {

  const { Customer, Address, Categories, Products, Orders, Items, Payments } = cds.entities('AdminService')

  this.after ('READ','Orders', async (data)=>{
    if(data.OrderStatus_code === 'D'){
      console.log("Your Order has been delivered successfully");
      
    }
  });

  this.on('READ','Orders', async(req)=>{
    return await(SELECT.from(Orders).where({
      OrderStatus_code : 'D'
    }));
  })

  // this.on('READ','Customer',async(req)=>{
  //   return await(SELECT.from(Customer).where({
  //     name : 'Rohith Naik'
  //   }));
  // })

  this.before('CREATE','Items',async(req)=>{
    if(req.data.price === 0){
      console.log("Cart Value should be more than 0");
    }
  });

  this.before('CREATE','Products' , async(req)=>{
    if(req.data.quantity <=0){
      console.log('Item out of stock');
    }
  });

  // this.after('CREATE', 'Orders' ,async(req)=>{
  //   const tx = req.tx();

  //   await tx.run(
  //     UPDATE(Products)
  //     .set({ quantity: })
  // })

  this.on('READ', 'Address' , async(req)=>{
    var results =[];
    var transaction = await cds.tx(req)

    results = await cds.tx(req).run( SELECT.from(Address).columns('HouseNumber', 'Area', {ref : ['Customer'],expand : [{ref : ['ID']},{ref:['name']},{ref: ['phone']},{ref:['email']}]}
    ));
    return results;
    });

    this.on('READ', 'Products' , async(req)=>{
    var results2 =[];
    var transaction = await cds.tx(req)

    results2 = transaction.run( SELECT.from(Products).columns('Productname', 'description','quantity', 'price', {ref : ['Category'],expand : [{ref : ['ID']},{ref:['Categoryname']}]}
    ));
    return results2;
    });

  //Inventory management
//   this.on('CREATE','Orders', async(req)=>{
//     let tx= await cds.tx(req);

//     tx.run UPDATE (Products)
//    .set({ stock: { '-=': data.quantity } })
//     .where({ ID: data.productID });
// });

  


  return super.init()
}}

