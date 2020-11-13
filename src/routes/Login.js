import React from 'react';
import './Login.css';

const Login=()=>{

    return(

        <div className="login-box">
            <div className="textbox">
                <i className="fas fa-user"/>
                <input type="text" placeholder="Emial"/>
            </div>

            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"/>
            </div>

        <input type="button" class="btn" value="Sign in"/>
        </div>
    )
}

export default Login;