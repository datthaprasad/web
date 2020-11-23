import React, { useState } from 'react';
import './Login.css';

import ErrorModel from '../UIelements/Error';
import LoadingSpinner from '../UIelements/LoadingSpinner'
import {useHttpClient} from '../Hooks/Http-Hook'


const Login=()=>{

    const [login_error,seterror]=useState();
    const {isLoading,error,sendRequest,clearError}=useHttpClient();

    const loginHandler=async (event)=>{
        event.preventDefault();
        let data;
        try{
            console.log("ok");
        data= await sendRequest(
            `http://localhost:5000/login`,
            'POST',
            {'Content-Type':'application/json'},
            JSON.stringify({
                    email:document.getElementById("email").value,
                    password:document.getElementById("password").value,
                    login:1
            }));
            if(data==="user not found")
                seterror("You dont have valid Account, create one");
            // else alert("Please give proper Mail Id")
        }
        catch(err){
            console.log(err);
        }
        console.log(data);
    }


    return(
        <React.Fragment >  
            {/* {isLoading1 && <LoadingSpinner asOverlay/>} */}
            {login_error && <ErrorModel error={login_error} onClear={()=>{seterror()}}/>}
            {error && <ErrorModel error={error} onClear={clearError}/>}
            {isLoading && <LoadingSpinner asOverlay/>}

        <marquee>
            <span>SRINIVAS INSTITUTE OF TECHNOLOGY,VALACHIL  </span>
            ENGINEERS JOB PORTAL
        </marquee>

        {!isLoading && <div>
        
        <div className="login-box">
            <div className="textbox">
                <i className="fas fa-user"/>
                <input id="email" type="text" placeholder="Emial"/>
            </div>

            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input id="password" type="password" placeholder="Password"/>
            </div>

        <input onClick={loginHandler} type="button" class="btn" value="Sign in"/>
        </div>
        </div>}
        </React.Fragment>
    )
}

export default Login;