import React, { useContext, useState } from 'react';
import './Login.css';

import ErrorModel from '../UIelements/Error';
import LoadingSpinner from '../UIelements/LoadingSpinner'
import {useHttpClient} from '../Hooks/Http-Hook'
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthContext';


const Login=()=>{

    const auth=useContext(AuthContext)
    const history = useHistory();
    const [login_error,seterror]=useState();
    const [header,setHeader]=useState('');
    const {isLoading,error,sendRequest,clearError}=useHttpClient();

    const loginHandler=async (event)=>{
        event.preventDefault();
        let data;
        try{
        data= await sendRequest(
            `https://web-mini.herokuapp.com/login`,
            'POST',
            {'Content-Type':'application/json'},
            JSON.stringify({
                    email:document.getElementById("email").value,
                    password:document.getElementById("password").value,
                    login:1
            }));

            if(data==="user not found"){
                seterror("You dont have valid Account, create one");
                setHeader("Login Failed")
            }
            else if(data==="password is incorrect"){
                seterror("Password is Incorrect")
                setHeader("Login Failed")
            }
            else if(data==="login successfull"){
                auth.LOGIN(document.getElementById("email").value)
                history.push('/');
            }
            else{
                seterror("Something went wrong, please try again later")
                setHeader("Something went wrong")
            }
        }
        catch(err){
            console.log(err);
        }
    }


    return(
        
        <React.Fragment >  
            {/* {isLoading1 && <LoadingSpinner asOverlay/>} */}
            {login_error && <ErrorModel header={header} error={login_error} onClear={()=>{seterror()}}/>}
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
        <h4>Don't have an account?<Link to='/signup'><a class='btnx'>Signup</a></Link></h4>
        </div>
        </div>}
        </React.Fragment>
    )
}

export default Login;