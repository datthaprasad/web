import React from 'react'
const Signup=()=>{
    return(
        
        <div className="login-box">
            {/* <h1>Sign-up</h1> */}
            <div className="textbox">
                <i className="fas fa-user"/>
                <input type="text" placeholder="Email"/>
            </div>

            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"/>
            </div>

            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password"/>
            </div>

        <input type="button" class="btn" value="Sign up"/>
        </div>
        
    )
}
export default Signup;