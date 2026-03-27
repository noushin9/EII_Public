using { cuid, managed, Country,  sap.common.CodeList} from '@sap/cds/common';
namespace ecommerce;

entity Customer : cuid, managed{
    name : String;
    address : Composition of many Address on address.Customer = $self;
    phone : PhoneNumber;
    email : EMailAddress;
}

entity Address : cuid {
    Customer : Association to Customer;
    HouseNumber : Integer;
    Area : String;
    City : String;
    State : String;
    PostalCode : String;
    Country : Country;
}

entity Categories : cuid{
    Categoryname : String; 
}

entity Products : cuid {
    Productname : String;
    description : String;
    quantity : Integer;
    price : Decimal(10, 2);
    Category : Association to Categories;
    
}

entity Orders : cuid, managed{
    OrderNo : Integer;
    orderTime : type of managed:createdAt;
    Amount : Decimal(10,2);
    OrderStatus : Association to OrderStatus;
    Customername : Association  to Customer;
    DeliveryAddress : Association to Address;
    items : Composition of many Items on items.Order  = $self;
    payment : Composition of one Payments on payment.Order = $self;

}

entity Items : cuid{
    Order : Association  to Orders;
    Product : Association to Products;
    Quantity : Integer;
    Price : Decimal(10,2);
}

entity Payments : cuid{
    Order : Association to Orders;
    PaidOn : Date;
    PaidAmount : Integer;
    paymentStatus : Association to PaymentStatus;
}

entity PaymentStatus : CodeList{
    key code : String enum {
        Pending = 'P';
        Successful = 'S';
        Failed = 'F';
    };
}

entity OrderStatus : CodeList{
    key code : String enum {
        Confirmed = 'C';
        Shipped = 'S';
        Delivered = 'D';
        Returned = 'R'; 
        
    };
}

type EMailAddress : String;
type PhoneNumber : String;
