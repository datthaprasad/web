import React, { useState,useEffect } from 'react'
import './Login.css'
import ErrorModel from '../UIelements/Error';
import LoadingSpinner from '../UIelements/LoadingSpinner'
import {useHttpClient} from '../Hooks/Http-Hook'
import { Link } from 'react-router-dom';


const Signup=()=>{
    useEffect(()=>{
        document.body.style.background= "url('https://www.myamcat.com/blog/wp-content/uploads/2016/02/graduation-hats.jpg') no-repeat center";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundPosition="center";
    },[]);
    
        const {isLoading,error,sendRequest,clearError}=useHttpClient();
        const [pass_error,seterror]=useState();
        const [header,setHeader]=useState();
    
        const signupHandler=async (event)=>{
            event.preventDefault();
            let data;

            if(String(document.getElementById("email").value).length===0){
                seterror("Email can not be empty")
                setHeader("Email requirements")
                return;
            }
            if(String(document.getElementById("password").value).length<6){
                seterror("Password length should be greater than 5")
                setHeader("Password requirements")
                return;
            }
            
            if(document.getElementById("password").value===document.getElementById("cpassword").value)
            try{
            data= await sendRequest(
                `http://localhost:5000/login`,
                'POST',
                {'Content-Type':'application/json'},
                JSON.stringify({
                        email:document.getElementById("email").value,
                        password:document.getElementById("password").value,
                        login:0
                }));
                
            if(data==="sent"){
                setHeader("Verify your Account")
                seterror("Verification mail sent to given mail, Please check.")
            }
            else if(data==="Email done") {
                seterror("Email already taken")
                setHeader("Signup failed")
            }

            else{
                seterror("Please give proper Mail Id")
                setHeader("Signup failed")
            }
            }
            catch(err){
                console.log(err);
                seterror("Please provide valid email")
                setHeader("Signup failed")
            }
            else{
                seterror("Passwords are not matching")
                setHeader("Password requirements")
            }
        }


    return(

        <React.Fragment >  
            {/* {/* {isLoading1 && <LoadingSpinner asOverlay/>} */}
            {pass_error && <ErrorModel header={header} error={pass_error} onClear={()=>{seterror()}}/>} 
            {error && <ErrorModel header={header} error={error} onClear={clearError}/>}
            {isLoading && <LoadingSpinner asOverlay/>}
        <marquee>
            <span>SRINIVAS INSTITUTE OF TECHNOLOGY,VALACHIL  </span>
            ENGINEERS JOB PORTAL
        </marquee>

        {!isLoading && <div className="login-box">
            <div className="textbox">
                <i className="fas fa-user"/>
                <input id="email" type="text" placeholder="Email"/>
            </div>

            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input id="password" type="password" placeholder="Password"/>
            </div>

            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input id="cpassword" type="password" placeholder="Confirm Password"/>
            </div>

        <input onClick={signupHandler} type="button" class="btn" value="Sign up"/>
        <h4>Already have an account?<Link to='/login'><a class='btnx'>Login</a></Link></h4>
        </div>}
        </React.Fragment>

    )
}
export default Signup;