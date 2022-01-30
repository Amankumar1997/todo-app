const express=require('express');
const app=express();

const port=8000;





//server litening
app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is runnig on port ${port}`);
});