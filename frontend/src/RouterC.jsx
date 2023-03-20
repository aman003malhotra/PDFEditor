import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './Login';
import MenuC from './MenuC/MenuC';
import Signup from './Signup';
import PDFComponent from './PDFComponent';
import AddPdf from './AddPdf';
import ListPaper from './ListPaper';
function RouterC() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<AddPdf/>}/>
            <Route path='addPdf' element={<PDFComponent/>}/>
            <Route path='listpdf' element={<ListPaper/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default RouterC