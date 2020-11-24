const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email: {type:String,unique:true},
    password:{type:String,minlength:6},
  
});

module.exports=mongoose.model('User',userSchema);