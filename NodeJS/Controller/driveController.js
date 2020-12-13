const Drive=require('../Model/driveSchema');

const driveList=async (req,res)=>{
    let list;
    try{
        list=await Drive.find({});
        console.log("nodejs list "+list);
        res.json(list);
    }
    catch(err){
        console.log("nodejs type A "+err);
        res.json("nodejs type "+err);
    }
}

const upload=async(req,res)=>{
    const name=req.body.name;
    const role=req.body.role;
    const link=req.body.link;
    const date=req.body.date;
    const desc=req.body.desc;
    let drive=new Drive({name,role,link,date,desc})
    try{
        await drive.save();
        res.json("successfull");
    }
    catch(err){
        res.json("error");
    }
}

exports.driveList=driveList;
exports.upload=upload;