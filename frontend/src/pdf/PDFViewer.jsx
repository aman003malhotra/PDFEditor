import React, { useEffect, useState } from 'react';
import * as PDFJS from 'pdfjs-dist/legacy/build/pdf';
import Connections from '@recogito/recogito-connections';
import PaginatedViewer from './paginated/PaginatedViewer';
import Store from './AnnotationStore';
import Slider from './Slider'
import 'pdfjs-dist/web/pdf_viewer.css';
import '@recogito/recogito-js/dist/recogito.min.css';
import '@recogito/annotorious/dist/annotorious.min.css';
import './PDFViewer.css';
import { useDispatch, useSelector } from 'react-redux';
import PenFunction from './PenFunction';

const store = new Store();

const PDFViewer = props => {
  
  const paintToggle = useSelector(state => state.paintToggle)
  const [ pdf, setPdf ] = useState();

  const [ connections, setConnections ] = useState();

  const dispatch = useDispatch();
  // Load PDF on mount
  useEffect(() => {
    // Init after DOM load
    const conn = new Connections([], { 
      showLabels: true,
      vocabulary: props.config.relationVocabulary
    });

    setConnections(conn);

    PDFJS.getDocument(props.url).promise
      .then(
        pdf => setPdf(pdf), 
        error => console.error(error)
      );

    // Destroy connections layer on unmount
    return () => conn.destroy();
  }, []);

  useEffect(() => {
    store.setAnnotations(props.annotations || []);
  }, [ props.annotations ])

  const onCreateAnnotation = a => {
    store.createAnnotation(a);
    props.onCreateAnnotation && props.onCreateAnnotation(a);
  }

  const onUpdateAnnotation = (a, p) => {
    store.updateAnnotation(a, p);
    props.onUpdateAnnotation && props.onUpdateAnnotation(a, p);
  }
    
  const onDeleteAnnotation = a => {
    store.deleteAnnotation(a);
    props.onDeleteAnnotation && props.onDeleteAnnotation(a);
  }

  const onCancelSelected = a => {
    props.onCancelSelected && props.onCancelSelected(a);
  }

  return pdf ?
  <>
      <PaginatedViewer 
        {...props}
        pdf={pdf}
        store={store}
        connections={connections}
        onCreateAnnotation={onCreateAnnotation}
        onUpdateAnnotation={onUpdateAnnotation}
        onDeleteAnnotation={onDeleteAnnotation} 
        onCancelSelected={onCancelSelected} />
        {paintToggle ? <PenFunction/> : <Slider />}
        </>
    : <div className="nopdf"><div>Please Add a new PDF or select a PDF from My Papers or the selected PDF has a password.Please remove the password before uploading.</div></div>;

}

export default PDFViewer;