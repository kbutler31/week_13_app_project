import React from "react";




// this is the login form 

function LoginForm(){
    return (
        <div className="login-form">
            <h3 className="login-form-heading">Login Form</h3>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password"/>
        </div>
            <button type="submit" className="log-in button" >Login</button>
        
        </div>
    );
};
export default LoginForm;