using {ecommerce} from './schema';

annotate ecommerce.Customer with{
    name @title : 'Customer Name'; 
    address @title : 'Address';
    phone @title : 'Phone Number';
    email @title : 'Email Address';
}