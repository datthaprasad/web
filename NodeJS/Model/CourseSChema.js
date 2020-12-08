const mongoose=require('mongoose');
const courseschema=new mongoose.Schema({
    title: {type:String},
    type:{type:String},
    link:{type:String},
  
});
module.exports=mongoose.model('Course',courseschema);