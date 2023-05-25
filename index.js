const express = require('express')
const mongoDB = require("./db");// Importing a custom module that connects to MongoDB
const app = express()
const port = 5000;





// Setting headers to avoid CORS errors
//app.use((req, res, next) => { ... }) sets headers to avoid CORS errors. 
//This middleware function allows requests from a specific origin (in this case, port 3000) and sets the headers for the request.

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");//isi port pr react render ho rahi hai
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}); 
app.use(express.json())



// By mounting the CreateUser module on the /api path using app.use('/api', require('./Routes/CreateUser')),
//  any HTTP request that matches the /api path, such as GET /api/users or POST /api/users, will be passed to the CreateUser module for handling.
app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
// app.use('related path' , module)
app.use('/api', require('./Routes/OrderData'));
app.use('/api', require('./Routes/getlocation'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

