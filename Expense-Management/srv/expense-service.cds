using {sap.capire.expense as ex} from '../db/schema';

service ExpenseService {
    entity Users as projection on ex.Users;
    entity Accounts as projection on ex.Accounts;
    entity Budgets as projection on ex.Budgets;
    entity Expenses as projection on ex.Expenses;
    entity Categories as projection on ex.Categories;
}