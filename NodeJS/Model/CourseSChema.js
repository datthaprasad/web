const mongoose=require('mongoose');
const courseSchema=new mongoose.Schema({
    title: {type:String},
    type:{type:String},
    link:{type:String},
  
});

module.exports=mongoose.model('Course',courseSchema);