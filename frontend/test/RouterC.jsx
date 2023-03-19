import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Signup from './Signup';

function RouterC() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>
    );
  }

export default RouterC