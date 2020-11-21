import React from 'react';
import './Login.css';

import ErrorModel from '../UIelements/Error';
import LoadingSpinner from '../UIelements/LoadingSpinner'
import {useHttpClient} from '../Hooks/Http-Hook'


const Login=()=>{

    
    const {isLoading,error,sendRequest,clearError}=useHttpClient();

    const loginHandler=async (event)=>{
        event.preventDefault();
        let data;
        try{
        data= await sendRequest(
            `url`,
            'POST',
            {'Content-Type':'application/json'},
            JSON.stringify({
                    email:document.getElementById("email").value,
                    password:document.getElementById("password").value
            }));
        }
        catch(err){
            console.log(err);
        }
    }


    return(
        <React.Fragment >  
            {/* {isLoading1 && <LoadingSpinner asOverlay/>}
            {error1 && <ErrorModel error={error1} onClear={()=>{seterror()}}/>} */}
            {error && <ErrorModel error={error} onClear={clearError}/>}
            {true && <LoadingSpinner asOverlay/>}

        <marquee>
            <span>SRINIVAS INSTITUTE OF TECHNOLOGY,VALACHIL  </span>
            ENGINEERS JOB PORTAL
        </marquee>

        {false && <div>
        
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