import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import authServices from './services/auth-services';
import {Link} from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(username != '' && email != '' && password != ''){
        console.log(username, email, password);
        authServices.register(username, email, password)
        .then(res => console.log(res));
      }
      // Add login logic here
    };
  
    return (
      <div className="wrap">
      <div className="box" style={{width:'410px',height: '480px'}} >
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="inputBox">
          <input type="text" id='username' required="required" value={username} onChange={handleUsernameChange} autoComplete="off"/>
          <span>Username</span>
          <i></i>
        </div>
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
        <Link to="/login">Already have an accout Login</Link>
        </div>
        <input type="submit" value="Signup"/>
      </form>
    </div>
    </div>
    );
  }
  
  export default Signup;