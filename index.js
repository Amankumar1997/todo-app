const express=require('express');
const { set } = require('express/lib/application');
// require path
const path =require('path');
const port=4000;

const app=express();


//view engine setup
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.set('views', path.join(__dirname, 'views'))

app.get('/',function(req,res){

    return res.render('home',{
        title:"todo"
    }
    );
});



// ejs setup




//server litening
app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is runnig on port ${port}`);
});