using { cuid, managed, sap.common.CodeList  } from '@sap/cds/common';

namespace sap.capire.expense;

entity Users : cuid, managed {
    firstName : String;
    lastName : String;
    name : String = trim (firstName ||''|| lastName);  
    mobileNo : String;
    email : String;
    accounts : Composition of many Accounts on accounts.user =$self;
    budgets : Composition of many Budgets on budgets.user =$self
}

entity Accounts : cuid {
    user : Association  to Users;
    type : Association to AccountType ;
    balance : Decimal default 0 ;
    expenses : Association to Expenses   
}

entity Budgets : cuid {
    user : Association to Users not null;
    month : Integer;
    year : Integer;
    amount : Decimal not null;
    currency : Association to Currency default 'INR';
}

entity Expenses : cuid {
    user : Association to Users ;
    account : Association to Accounts;
    title : String(100) not null;
    amount : Decimal(12,2) not null;
    currency : Association to Currency default 'INR';
    date : Date not null;
    category : Association to Categories;
    descr : String;
    status : Association to ExpenseStatus;
}

entity AccountType : CodeList {
    key code : String enum
    {
        Bank = 'Bank';
        Wallet = 'Wallet';
        CreditCard = 'CreditCard';
        DebitCard = 'DebitCard';
        UPI = 'UPI';
        Savings = 'Savings';
        Cash = 'Cash';
        CorporateCard = 'CorporateCard';
        Payroll = 'Payroll';
        Miscellaneous = 'Miscellaneous'
    }
}

entity Currency : CodeList {
    key code : String enum {
        INR = 'INR';
        USD = 'USD';
        EUR = 'EUR';
        GBP = 'GBP';
        JPY = 'JPY';
        AUD = 'AUD';
        CAD = 'CAD';
        SGD = 'SGD';
        CHF = 'CHF';
        AED = 'AED'
    }
}

entity ExpenseStatus : CodeList {
    key code : String enum {
        Draft = 'Draft';
        Submitted = 'Submitted';
        Approved = 'Approved';
        Rejected = 'Rejected';
        Paid = 'Paid';
        Pending = 'Pending';
        Review = 'Review';
        OnHold = 'OnHold';
        Closed = 'Closed';
        Archived = 'Archived'
    }
}

entity Categories : cuid {
    name : localized String;
    descr : localized String;
}