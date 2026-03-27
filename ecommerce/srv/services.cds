using {ecommerce as ecommerce} from '../db/schema';

service AdminService {
    entity Customer as projection on ecommerce.Customer;
    entity Address as projection on ecommerce.Address;
    entity Categories as projection on ecommerce.Categories;
    entity Products as projection on ecommerce.Products;
    entity Orders as projection on ecommerce.Orders;
    entity Items as projection on ecommerce.Items;
    entity Payments as projection on ecommerce.Payments
}

service UserService {
    @readonly 
    entity Customer as projection on ecommerce.Customer;
    @readonly 
    entity Categories as projection on ecommerce.Categories;
    @readonly 
    entity Products as projection on ecommerce.Products;
    @readonly 
    entity Items as projection on ecommerce.Items;
}