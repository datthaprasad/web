var nodemailer = require("nodemailer");
const User=require('../Model/UserSchema')

let rand,mailOptions,host,link,email,password;

const sendMail=async function(req,res){

    email=req.body.email
    password=req.body.password
    if(email==="jobportal admin" && password==="GodisGreat"){
        res.json("admin");
        return;
    }
    let existingUser;
    try{
        existingUser=await User.findOne({email:email})
    }
    catch(err){
        res.json("user not found")
        return;
    }
    if(req.body.login===0){
    if(existingUser){
        res.json("Email done")
    }
    else{
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service:"Gmail",
        secure: false,
        auth: {
            user: "jobportal.sit.valachil@gmail.com",
            pass: "123abc456def"
        },
        tls: {
            rejectUnauthorized: false
          }
    });

    rand=Math.floor((Math.random() * 100) + 54);
    host=req.get('host');
    link="http://"+req.get('host')+"/verify?id="+rand;

    mailOptions={
        to : req.body.email,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email for <bold>ENGINEERS JOB PORTAL</bold>.<br><a href="+link+">Click here to verify</a><br>Thank you." 
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
        res.end("something went wrong"+error);
     }else{
        res.json("sent");
         }
        
});}
    }
else{
            if(!existingUser) res.json("user not found");
            else if(req.body.password===existingUser.password)
            res.json("login successfull")
            else
                res.json("password is incorrect")
        
        
    
    
}
}

const verifyMail=async function(req,res){
    if((req.protocol+"://"+req.get('host'))==("http://"+host))
    {
        if(req.query.id==rand)
        {
            console.log("email "+email+" and "+password);
            const user=new User({email,password});
            console.log("user is "+user);
            try{
                await user.save();
                res.end("<h1>Email "+mailOptions.to+" is been Successfully verified, you can login now");
            }
            catch(err){
                res.json("cant save"+err);
            }
        }
        else
        {
            res.end("<h1>Email is not verified</h1>");
        }
    }
    else
    {
        res.end("<h1>Request is from unknown source");
    }
    }

exports.sendMail=sendMail;
exports.verifyMail=verifyMail;