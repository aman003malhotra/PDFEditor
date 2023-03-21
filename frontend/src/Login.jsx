import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import authServices from './services/auth-services';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add login logic here
      if(email != '' && password != ''){
        authServices.login(email, password)
        .then((res) => 
        {
          window.location.href = '/';
          return false;
        })
        .catch((err) => {
          setErrorMessage(err.response.data);
          setErr(true);
        })
      }else{
        setErrorMessage("Please fill all the values");
        setErr(true);
      }
    };
    const handleClose = () =>{
      setErr(false);
      setErrorMessage("");
    }
    return (
      <div className="wrap">
        {err && (<Alert severity="error" onClose={() => {handleClose()}}>{errorMessage}</Alert>)}
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
          <Link to="/signup">Does not have an account Signup</Link>
        </div>
        <input type="submit" value="Login"/>
      </form>
    </div>
    </div>
    );
  }
  
  export default Login;