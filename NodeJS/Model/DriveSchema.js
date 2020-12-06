const mongoose=require('mongoose');
const driveSchema=new mongoose.Schema({
    name: {type:String},
    post:{type:String},
    description:{type:String},
    link:{type:String},
    last_date:{type:String},
  
});

module.exports=mongoose.model('Drive',driveSchema);