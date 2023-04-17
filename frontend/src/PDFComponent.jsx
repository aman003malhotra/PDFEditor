import React, { useEffect, useState } from 'react';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
import PDFViewer from './pdf/PDFViewer';
import annotationService from './services/annotation-service';
import { API_URL } from './services/annotation-service';
import Question from './Questions/Question';

const PDFComponent = () => {

    const [ annotations, setAnnotations ] = useState();

    useEffect(() => {
      let filename = localStorage.getItem('selected_pdf');
      const arr_annotation = []
      const res =  annotationService.getAll(filename)
      .then(res =>{
        for(let i=0;i<res.length;i++){
          let anno = JSON.parse(res[i].annotation);
          arr_annotation.push(anno);
          }
          return arr_annotation;
        }).then(res => setAnnotations(res));
    }, []);
  
    return (
      <div className='flex flex-row'>
        <PDFViewer 
        style={{width:"60%"}}
        mode="scrolling"
        config={{
          relationVocabulary: ['located_at', 'observed_at']
        }}
        url={localStorage.getItem('selected_pdf')} 
        annotations={annotations} 
        onCreateAnnotation={a => console.log(JSON.stringify(a))} 
        onUpdateAnnotation={(a, b) => console.log(JSON.stringify(a, b))} 
        onDeleteAnnotation={a => console.log(JSON.stringify(a))} />
        <div style={{flexGrow:1}}>
          <Question />
        </div>
      </div>
      
    )
  
  }

export default PDFComponent;