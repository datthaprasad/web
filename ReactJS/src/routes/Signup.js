import React, { useState } from 'react'
import './Login.css'
import ErrorModel from '../UIelements/Error';
import LoadingSpinner from '../UIelements/LoadingSpinner'
import {useHttpClient} from '../Hooks/Http-Hook'


const Signup=()=>{

    
        const {isLoading,error,sendRequest,clearError}=useHttpClient();
        const [pass_error,seterror]=useState();
    
        const signupHandler=async (event)=>{
            event.preventDefault();
            let data;
            if(String(document.getElementById("password").value).length<6){
                seterror("Password length should be greater than 5")
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
                
            if(data==="sent")
            alert("Verification email sent to your Mail Id,Please check once")
            else if("Email done") 
                seterror("Email already taken")
            else
                seterror("Please give proper Mail Id")
            }
            catch(err){
                console.log(err);
            }
            else{
                seterror("Passwords are not matching")
            }
        }


    return(

        <React.Fragment >  
            {/* {/* {isLoading1 && <LoadingSpinner asOverlay/>} */}
            {pass_error && <ErrorModel error={pass_error} onClear={()=>{seterror()}}/>} 
            {error && <ErrorModel error={error} onClear={clearError}/>}
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
        </div>}
        </React.Fragment>

    )
}
export default Signup;