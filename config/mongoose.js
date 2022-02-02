// require mongoose library
const mongoose = require('mongoose');
// connect mongoose to data base
mongoose.connect('mongodb://localhost/todo_db');

// aquire the connection(to check if it sucessfull)
const db=mongoose.connection;

// if there is an error we throw error
db.on('error',function(err){
    console.log(err.message);
});

// if there is no error then prints sucefully conected to the database
// up and running then print the message 
db.once('open',function(){
    console.log("succesfully connected to the datbase");
})