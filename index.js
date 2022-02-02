const express=require('express');
const { set } = require('express/lib/application');

// require path
const path =require('path');
// include mongosse whenever server is firing up
const db =require('./config/mongoose');
const Todo=require('./models/todo');
const port=4000;

const app=express();


//app.use signifying the the middleware 
// express.urilencoded  takes the req and reads or analys the data
app.use(express.urlencoded());
app.use(express.static('assets'));


//view engine setup
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded());

// // temporary list
// var todoList=[
//     {desc:"this is just for fum"
//    },
//     {
//       desc:"this is also just for fun"
      
//     }
// ];




app.get('/',function(req,res){

    // return res.render('home',{
    //     title:"todo",
    //     todolist:todoList
    // }
    // );

    Todo.find({},function(err,contacts){

        if(err)
        {console.log('error in fetching contact ');
          return;
        }
        return res.render('home',{
        title:"todo",
        todolist:contacts
    }
    );
    });
});

// controller for list  and aading new listcontroller
app.post('/create-contact',function(req,res){
  
    // todoList.push(req.body);
    // return res.redirect('/');
Todo.create({
    desc:req.body.desc,
    category:req.body.category,
    date:req.body.date
},function(err,newTodo){
    if(err)
    {
        console.log('error in creating todo');
        return;
    }
    console.log('******',newTodo);
    return res.redirect('back');

})

});





// delete contact
app.get('/delete-contact',function(req,res){
// get the id from query in the url
    let id=req.query.id;
// find the todoin the data baseusing id and delete
Todo.findByIdAndDelete(id,function(err){
if(err)
{
    console.log("there is an error deleting data from database");
    return;
}
return res.redirect('back');

});

    // get query from url
    // let desc=req.query.desc;
    // //  find contactindex if it present then we delete a contct other wise return -1
    //             let contactindex=todoList.findIndex(contact => contact.desc==desc);
               
    //             if(contactindex!=-1)
    //             {
    //              todoList.splice(contactindex,1);
    //             }
    //             return res.redirect('back');
});



//server litening
app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is runnig on port ${port}`);
});