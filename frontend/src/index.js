import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
import PDFViewer from './pdf/PDFViewer';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';
import RouterC from './RouterC';

// export { 
//   pdfjs, PDFViewer
// }

window.onload = function() {

  ReactDOM.render(
    <RouterC />,
    document.getElementById('app')
  );
}
