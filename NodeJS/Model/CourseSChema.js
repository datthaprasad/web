const mongoose=require('mongoose');
const courseschema=new mongoose.Schema({
    title: {type:String},
    type:{type:String},
    id:{type:String},
    short:{type:String},
    long:{type:String}
});
module.exports=mongoose.model('Course',courseschema);