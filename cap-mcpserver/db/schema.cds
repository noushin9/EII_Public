namespace my.bookshop;

entity Books {
  key ID     : Integer;
      title  : String(100);
      author : Association to Authors;
      stock  : Integer;
      price  : Decimal(10, 2);
      genre  : String(50);
}

entity Authors {
  key ID      : Integer;
      name    : String(100);
      country : String(50);
      books   : Association to many Books on books.author = $self;
}
