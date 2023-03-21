import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Login from './Login';
import MenuC from './MenuC/MenuC';
import Signup from './Signup';
import PDFComponent from './PDFComponent';
import AddPdf from './AddPdf';
import ListPaper from './ListPaper';
import authServices from './services/auth-services';

function RouterC() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={authServices.getCurrentUser() ?  <App />:<Navigate to="/login" replace={true} />} >
            <Route path="/" element={<AddPdf/>}/>
            <Route path='addPdf' element={<PDFComponent/>}/>
            <Route path='listpdf' element={<ListPaper/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    );
  }

export default RouterC