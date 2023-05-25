const  mongoose = require('mongoose');
const { Schema } = mongoose;

//Object of Schema
const  UserSchema = new Schema({
    name :{
        type : String ,
        required : true
    },
    location :{
        type:String,
        required : true
    },
    email :{
        type:String,
        required : true
    },
    password :{
        type:String,
        required : true
    },
    date :{
        type:Date,
        default : Date.now
    }

});

// Humare database me store ho jaaega ye model jisme user ye hoga or ye given UserSchema
// Here we are exporting a model in which you can make a schema like Userschema that we we have defined
//above and the name of schema is given as first parameter
module.exports = mongoose.model('user' , UserSchema)










/*-------------------------------------------------------------------------------*/

/*

This is a Node.js module that defines a Mongoose schema and exports a Mongoose model. Let's go through each part in detail:

const mongoose = require('mongoose');: This line imports the Mongoose library, which provides the tools for defining schemas,
                 models, and interacting with MongoDB.

const { Schema } = mongoose;: This line uses destructuring assignment to import the 
                   Schema class from the Mongoose library. The Schema class is used to define the
                  structure and properties of a document in a MongoDB collection.

const UserSchema = new Schema({ ... });: This line creates a new instance of the Schema
                 class and defines the structure of the User document. The UserSchema object is
                an instance of the Schema class and contains several properties that describe the 
                fields in the User collection.

The name, location, email, and password fields are all defined with a type of String and are required properties.
The date field is defined with a type of Date and is set to the current date and time by default.
module.exports = mongoose.model('user', UserSchema);: This line exports a Mongoose model that 
represents the User collection in the MongoDB database. The mongoose.model method takes two arguments: the name of the collection, and the schema that defines its structure.

In this case, the name of the collection is 'user'.
The UserSchema object that we defined earlier is passed in as the second argument.
Once the User model is defined and exported, it can be used to interact with the user collection in the MongoDB database. 
For example, you could use the User model to create, read, update, or delete User documents in the database.



*/


/*-------------------------------------------------------------------------------*/

/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
It provides a higher-level abstraction over the MongoDB driver, 
making it easier to work with MongoDB databases in Node.js applications.


Here are some key features of Mongoose:

Schema-based modeling: Mongoose allows you to define schemas for
                     your MongoDB collections, which specify the shape
                    and data types of documents in a collection. 
                   This helps you ensure data consistency and validation.

Validation: Mongoose provides built-in validation features that allow you to define validation
            rules for your schema fields. This helps you ensure that data is always in a consistent
             and valid state.

Middleware: Mongoose supports middleware functions that allow you to define custom logic
              to be executed before or after certain events, such as saving or updating documents.

Query building: Mongoose provides a powerful query builder API that allows you to build 
                complex MongoDB queries using a simple and intuitive syntax.

Population: Mongoose provides a population feature that allows you to reference 
            documents in other collections and pull them in when querying a collection.

Overall, Mongoose is a popular and powerful library that makes working with MongoDB in Node.js 
applications easier and more efficient. It provides a wide range of features that help developers 
manage MongoDB data in a structured and consistent way


*/
/*-------------------------------------------------------------------------------*/