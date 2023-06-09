import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Login from './Authentication/Login';
import MenuC from './MenuC/MenuC';
import Signup from './Authentication/Signup';
import PDFComponent from './PDFComponent';
import AddPdf from './AddNewPdf/AddPdf';
import ListPaper from './ListPaper';
import authServices from './services/auth-services';
import Main from './Evaluation/Main';
import MarkSheet from './MarkSheet';

function RouterC() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={authServices.getCurrentUser() ?  <App />:<Navigate to="/login" replace={true} />} >
            <Route path="/" element={<Main/>}/>
            <Route path='addPdf' element={<PDFComponent/>}/>
            <Route path='listpdf' element={<ListPaper/>}/>
            <Route path='addnewpdf' element={<AddPdf/>}/>
            <Route path='mark' element={<MarkSheet/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    );
  }

export default RouterC