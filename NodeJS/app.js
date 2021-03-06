const express=require('express');
const bodyParser=require('body-parser');
const loginController=require('./Controller/loginController')
const mongoose=require('mongoose');
const courseController = require('./Controller/courseController');
const driveController=require('./Controller/driveController')
// const { driveList } = require('./Controller/driveController');

const app=express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');//Origin, X-Requested-With, Authorization, Content-Type,Access
    res.setHeader('Access-Control-Allow-Methods','*')
    next();
})


app.post('/login',loginController.sendMail);
app.post('/course-upload',courseController.upload);
app.post('/drive-upload',driveController.upload)
app.get('/drive',driveController.driveList)
app.post('/course',courseController.courseList);
app.get('/verify',loginController.verifyMail);



// app.get('/drive',driveList);

app.get('/',(req,res)=>{
    res.json("hai ReactJS, connection done")
})



mongoose.connect('mongodb+srv://job_portal:hari123@cluster0.iguby.mongodb.net/engineersportal?retryWrites=true&w=majority', {
    useUnifiedTopology: true,             //THIS MIGHT RISE ERROR IN THE FUTURE
    useCreateIndex:true,
    useNewUrlParser: true
})
.then(()=>{
    console.log('successfully connected to the database');
    app.listen(process.env.PORT || 5000);
     
})
.catch(err=>{
    console.log(err);
});