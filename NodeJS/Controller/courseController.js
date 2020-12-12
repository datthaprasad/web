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
const upload=async(req,res)=>{
    const title=req.body.title;
    const type=req.body.type;
    const short=req.body.short;
    const long=req.body.long;
    const id=req.body.id;
    let course=new Course({title,type,id,short,long})
    try{
        await course.save();
        res.json("successfull");
    }
    catch(err){
        res.json("error");
    }
}

exports.courseList=courseList;
exports.upload=upload;