const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  

  
  type Book {
    id:ID
    title: String
    author: String
  }

  input BookInput{
    id:ID
    title: String
    author: String

  }
  
  type Query {
    books: [Book]
   
  }
 type Mutation{
    deleteBook(input:BookInput):[Book]
  }
`;

const books = [
    {
        id:'1',
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
        id:"2",
      title: 'City of Glass',
      author: 'Paul Auster',
    },
    {
        id:"3",
      title: 'City of Glass',
      author: 'Paul Auster',
    },
    {
        id:"4",
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];


  const resolvers = {
    Query: {
      books: () => books,
    },
    Mutation: {
        deleteBook: (_,{input}) =>{
        console.log("🚀 ~ file: index.js ~ line 60 ~ input", input)
     let deleteItem=books.find(item=>item.id == input.id)
    
     if(deleteItem){
       let result=books.filter(item=>item.id !==input.id)
    
       return result
     }
            
        }
        
      },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});