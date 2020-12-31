import React, { useEffect, useState } from "react";
import ErrorModal from "../UIelements/Error";
import LoadingSpinner from "../UIelements/LoadingSpinner";
import "./Form.css";
import { useHttpClient } from "./Http-Hook";

const Form2=()=>{
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

      const name= document.getElementById('name').value;
      const role= document.getElementById('role').value;
      let link= document.getElementById('link').value;
      const date= document.getElementById('date').value;
      const desc= document.getElementById('description').value;

      if(String(name).length===0) {
        seterror("Company name can not be empty")
        setHeader("Please fill all data")
        return;
      }
      if(String(role).length===0) {
        seterror("Job role can not be empty")
        setHeader("Please fill all data")
        return;
      }
      if(String(link).length===0) {
        seterror("Link can not be empty")
        setHeader("Please fill all data")
        return;
      }
      if(String(date).length===0) {
        seterror("Last date can not be empty")
        setHeader("Please fill all data")
        return;
      }
      if(String(desc).length===0) {
        seterror("Description/Criteria can not be empty")
        setHeader("Please fill all data")
        return;
      }
      try{
        let data;
        data= await sendRequest(
          `https://job-portal-sit.herokuapp.com/drive-upload`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  name:name,
                  role:role,
                  link:link,
                  date:date,
                  desc:desc
          }));

          if(data==="successfull"){
            seterror("given drive stored succefully")
            setHeader("Successfully Uploaded")
          }
      }
      catch(err){
      }
    }

    return(
        <React.Fragment>
          {pass_error && <ErrorModal header={header} error={pass_error} onClear={()=>{seterror()}}/>} 
            {error && <ErrorModal header={headers} error={error} onClear={clearError}/>}
            {isLoading && <LoadingSpinner asOverlay/>}
    {!isLoading && <div className="wrapper">
  <div className="title">
    <h1>New Drive</h1>
  </div>
  <div className="drive-form">
    <div className="input-fields">
      <input type="text" className="input" id="name" placeholder="Company Name"/>
      <input type="text" className="input" id="role" placeholder="Job Role"/>
      <input type="text" className="input" id="link" placeholder="Link to apply"/>
      <input type="text" className="input" id="date" placeholder="Last date"/>

    </div>
    <div className="msg">
      <textarea style={{"border":"solid 1px white"}} id="description" placeholder="Description and Eligibilty criteria"></textarea>
      <div className="btns" style={{textAlign:"center"}} onClick={formHandler}>send</div>
    </div>
  </div>
</div>}
</React.Fragment>);
}

export default Form2;