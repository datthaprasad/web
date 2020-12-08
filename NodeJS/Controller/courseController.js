const Course=require('../Model/courseschema');

const courseList=async(req,res)=>{
    let list;
        try{
            list=await Course.find({type:req.body.type})
            res.send(list);
        }
        catch(err){
            console.log("nodejs type A "+err);
            res.json("nodejs type "+err);
        }
    
}

exports.courseList=courseList;