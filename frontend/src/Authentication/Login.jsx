import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import authServices from '../services/auth-services';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import logo from '../assets/logo.png';

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
        })
        .catch((err) => {
          console.log(err)
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
    //   <div className="wrap">
    //     {err && (<Alert severity="error" onClose={() => {handleClose()}}>{errorMessage}</Alert>)}
    //     <div className="box">
        
    //     <form onSubmit={handleSubmit}>
    //       <h2>Log In</h2>
    //       <div className="inputBox">
    //         <input type="email" id='email' required="required" value={email} onChange={handleEmailChange}/>
    //         <span>Email Address</span>
    //         <i></i>
    //       </div>
    //       <div className="inputBox">
    //         <input type="password" required="required" id='password' value={password} onChange={handlePasswordChange}/>
    //         <span>Password</span>
    //         <i></i>
    //       </div>
    //       <div className="links">
    //         <Link to="/signup">Does not have an account Signup</Link>
    //       </div>
    //       <input type="submit" value="Login"/>
    //     </form>
    //   </div>
    // </div>
    <div>
      <div className="flex flex-row justify-around items-center h-[100vh]">
      {err && (<Alert severity="error" onClose={() => {handleClose()}}>{errorMessage}</Alert>)}
        <div className='flex flex-col'>
          <div className='text-4xl font-bold text-[#2F2F2F] text-opacity-60'>Welcome To<span className='text-[#6358DC]'> AI Koach</span></div>
          <div>
            <img src={logo} alt="logo" className='max-w-lg'/>
          </div>
        </div>
        <div className='form flex flex-col px-8 py-28 rounded-lg shadow-md'>
              <form onSubmit={handleSubmit}>
              <div className="relative mb-6 flex flex-row bg-[#EAE2FF] rounded-lg">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z" 
                    fill="#615EEA"/>
                  </svg>
                </div>
                <div className='flex flex-col'>
                  <lable className="text-xs font-normal text-[#464E5F] pl-14 py-4">Email</lable>
                  <input type="text" className="bg-[#EAE2FF]  text-[#464E5F] font-bold text-base rounded-lg block w-full pl-14 pb-5 border-transparent focus:border-transparent focus:ring-0" placeholder="example@gmail.com" />
                </div>
              </div>

              <div className="relative mb-6 flex flex-row bg-[#EAE2FF] rounded-lg">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3749 21.3749V22.4998C12.3749 22.7982 12.2564 23.0844 12.0454 23.2953C11.8344 23.5063 11.5483 23.6248 11.2499 23.6248H8.99994V24.7498C8.99994 25.3466 8.76289 25.9189 8.34093 26.3408C7.91898 26.7628 7.34669 26.9998 6.74995 26.9998H2.24998C1.65325 26.9998 1.08096 26.7628 0.659005 26.3408C0.237051 25.9189 0 25.3466 0 24.7498V21.8406C0.000127433 21.2439 0.237262 20.6717 0.659245 20.2499L9.36669 11.5424C8.83278 9.72947 8.88315 7.79444 9.51066 6.01172C10.1382 4.229 11.311 2.68906 12.8628 1.61026C14.4146 0.531463 16.2666 -0.0314448 18.1562 0.00135624C20.0459 0.0341573 21.8773 0.661002 23.3907 1.79301C24.9041 2.92501 26.0227 4.50472 26.588 6.30815C27.1533 8.11158 27.1364 10.0472 26.5399 11.8405C25.9434 13.6339 24.7975 15.1939 23.2647 16.2994C21.7318 17.405 19.8898 17.9999 17.9999 17.9999H15.7476V20.2499C15.7476 20.5482 15.6291 20.8344 15.4181 21.0454C15.2072 21.2563 14.921 21.3749 14.6226 21.3749H12.3727H12.3749ZM20.2499 8.99994C20.8466 8.99994 21.4189 8.76289 21.8408 8.34093C22.2628 7.91898 22.4998 7.34669 22.4998 6.74995C22.4998 6.15322 22.2628 5.58093 21.8408 5.15898C21.4189 4.73702 20.8466 4.49997 20.2499 4.49997C19.6531 4.49997 19.0808 4.73702 18.6589 5.15898C18.2369 5.58093 17.9999 6.15322 17.9999 6.74995C17.9999 7.34669 18.2369 7.91898 18.6589 8.34093C19.0808 8.76289 19.6531 8.99994 20.2499 8.99994Z" 
                    fill="#615EEA"/>
                  </svg>
                </div>
                <div className='flex flex-col'>
                  <lable className="text-xs font-normal text-[#464E5F] pl-14 py-4">Password</lable>
                  <input type="password" className="bg-[#EAE2FF]  text-[#464E5F] font-bold text-base rounded-lg block w-full pl-14 pb-5 border-transparent focus:border-transparent focus:ring-0"/>
                </div>
              </div>
              <button type="submit" value="Login" className='block w-full bg-[#615EEA] text-base text-white rounded-lg py-7 px-[310px]'>
                Login  
              </button>
              {/* <div className="links">
                <Link to="/signup">Does not have an account Signup</Link>
              </div> */}
            </form>
        </div>
      </div>

    </div>
    
    );
  }
  
  export default Login;