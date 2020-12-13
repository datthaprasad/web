import React,{useEffect, useState} from "react";
import "./Form.css";
import ErrorModel from '../UIelements/Error';
import LoadingSpinner from '../UIelements/LoadingSpinner'
import { useHttpClient } from "./Http-Hook";
import ErrorModal from "../UIelements/Error";

const Form=()=>{
  useEffect(()=>{
    document.body.style.background= "url('https://www.myamcat.com/blog/wp-content/uploads/2016/02/graduation-hats.jpg') no-repeat center";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundPosition="center";
},[]);
        const [pass_error,seterror]=useState();
        const {isLoading,error,sendRequest,clearError,headers}=useHttpClient();
        const [header,setHeader]=useState();        
      const formHandler=async (event)=>{
      event.preventDefault();

      const title= document.getElementById('title').value;
      const id= document.getElementById('id').value;
      let type= String(document.getElementById('type').value).toLowerCase();
      const short= document.getElementById('short').value;
      const long= document.getElementById('long').value;

      if(String(title).length===0) {
        seterror("Title can not be empty")
        setHeader("Please fill all data")
        return;
      }
      
      else if(String(type).length===0){
        seterror("Type can not be empty")
        setHeader("Please fill all data")
        return;
      }
      
      else if(!(String(type).toLowerCase()==="aptitude"||String(type).toLowerCase()==="technical"||String(type).toLowerCase()==="hr")){
        seterror("select course type between Aptitude/Technical/HR")
        setHeader("Course type error")
        return;
      }
      else if(String(id).length===0){
        seterror("Id can not be empty")
                setHeader("Please fill all data")
                return;
      }
      else if(String(short).length===0){
        seterror("Short Description can not be empty")
        setHeader("Please fill all data")
        return;
      }
      let data;
      if(type==="aptitude") type='A';
      else if(type==="technical") type="T";
      else if(type==="hr") type="H";

      try{

        data= await sendRequest(
          `http://localhost:5000/course-upload`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  title:title,
                  id:id,
                  type:type,
                  short:short,
                  long:long
          }));

          if(data==="successfull"){
            seterror("given course stored succefully")
            setHeader("Successfully Uploaded")
          }
      }
      catch(err){
      }

    }

    return(
        <React.Fragment>
           {pass_error && <ErrorModel header={header} error={pass_error} onClear={()=>{seterror()}}/>} 
            {error && <ErrorModel header={headers} error={error} onClear={clearError}/>}
            {isLoading && <LoadingSpinner asOverlay/>}
    {!isLoading && <div className="wrapper">
  <div className="title">
    <h1>New Course</h1>
  </div>
  <div className="drive-form">
    <div className="input-fields">
      <input type="text" className="input" id="title" placeholder="Title"/>
      <input type="text" className="input" id="type" placeholder="Type (Aptitude/Technical/HR)"/>
      <input type="text" className="input" id="id" placeholder="YouTube ID"/>
      <input type="text" className="input" id="short" placeholder="Short description"/>

    </div>
    <div className="msg">
      <textarea style={{"border":"solid 1px white"}} id="long" placeholder="Additional Description (Optional)"></textarea>
      <div className="btns" style={{textAlign:"center"}} onClick={formHandler}>submit</div>
    </div>
  </div>
</div>}
</React.Fragment>);
}

export default Form;