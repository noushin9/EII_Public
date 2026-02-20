using my.bookshop from '../db/schema';

service CatalogService {

  // Resource: Browse books with OData queries
  @readonly
  @mcp: {
    name       : 'books',
    description: 'Book catalog with search and filtering',
    resource   : ['filter', 'orderby', 'select', 'top', 'skip']
  }
  entity Books as projection on bookshop.Books;

  // Resource: Search authors
  @readonly
  @mcp: {
    name       : 'authors',
    description: 'Author directory',
    resource   : ['filter', 'orderby', 'top']
  }
  entity Authors as projection on bookshop.Authors;

  // Tool: Get recommendations
  @mcp: {
    name       : 'get-recommendations',
    description: 'Get book recommendations by genre',
    tool       : true
  }
  function getRecommendations(
    genre : String,
    limit : Integer
  ) returns array of String;

  // Tool: Check availability
  @mcp: {
    name       : 'check-availability',
    description: 'Check if a book is in stock',
    tool       : true
  }
  function checkAvailability(
    bookId : Integer
  ) returns Boolean;
}
