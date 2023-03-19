import React, { useEffect, useState } from 'react';
import { pdfjs, PDFViewer } from '../src';
const PDFComponent = () => {

    const [ annotations, setAnnotations ] = useState();
  
    useEffect(() => {
      fetch('sample-annotations.json')
        .then(response => response.json())
        .then(setAnnotations);
    }, []);
  
    return (
      <PDFViewer 
        style={{width:"60%"}}
        mode="scrolling"
        config={{
          relationVocabulary: ['located_at', 'observed_at']
        }}
        url="compressed.tracemonkey-pldi-09.pdf" 
        annotations={annotations} 
        onCreateAnnotation={a => console.log(JSON.stringify(a))} 
        onUpdateAnnotation={(a, b) => console.log(JSON.stringify(a, b))} 
        onDeleteAnnotation={a => console.log(JSON.stringify(a))} />
    )
  
  }

export default PDFComponent;