import React from 'react';
import PDFComponent from './PDFComponent';
import InputForm from './InputForm';
import MenuC from './MenuC/MenuC';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>  
        <MenuC />
        <div className='app'>
        <Outlet />
        </div>
        
        {/* <InputForm /> */}
    </>

  )
}

export default App