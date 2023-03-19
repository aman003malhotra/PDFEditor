import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { pdfjs, PDFViewer } from '../src';
import RouterC from './RouterC';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';



window.onload = function() {

  ReactDOM.render(
    <RouterC />,
    document.getElementById('app')
  );
    
}

