const mongoose=require('mongoose');
const driveSchema=new mongoose.Schema({
    name: {type:String},
    role:{type:String},
    link:{type:String},
    date:{type:String},
    desc:{type:String},
  
});

module.exports=mongoose.model('Drive',driveSchema);