const mongoose=require('mongoose');

// defingingg schema 
const todoSchema=new mongoose.Schema({

    desc:{
       type:String,
       required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type: String,
  // `lastActiveAt` is a date
  lastActiveAt: Date
//    type:Date,
//    required:true
    }

});
// we need to tell what would be the name of the collection i'll be in this schema
const Todo=mongoose.model('Todo',todoSchema);
module.exports=Todo;

