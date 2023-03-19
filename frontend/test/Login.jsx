import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add login logic here
    };
  
    return (
      <div className="box">
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="inputBox">
          <input type="email" id='email' required="required" value={email} onChange={handleEmailChange}/>
          <span>Email Address</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required="required" id='password' value={password} onChange={handlePasswordChange}/>
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password ?</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login"/>
      </form>
    </div>
    );
  }
  
  export default Login;