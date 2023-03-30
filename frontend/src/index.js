import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
import PDFViewer from './pdf/PDFViewer';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';
import RouterC from './RouterC';
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

const store = createStore(reducer);

window.onload = function() {

  ReactDOM.render(

    <Provider store={store} >
      <RouterC />
    </Provider>
    ,
    document.getElementById('app')
  );
}
