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
import CircularProgress from '@mui/material/CircularProgress';

const store = new Store();

const PDFViewer = props => {
  const paintToggle = useSelector(state => state.paintToggle)
  const [ pdf, setPdf ] = useState();

  const [ connections, setConnections ] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  // Load PDF on mount
  useEffect(() => {
    // Init after DOM load
    const conn = new Connections([], { 
      showLabels: true,
      vocabulary: props.config.relationVocabulary
    });
    setLoading(true);
    setConnections(conn);

    PDFJS.getDocument(props.url).promise
      .then(
        pdf => {
          setPdf(pdf)
          dispatch({type:"PDF_SELECTED", payload:pdf});
          setLoading(false);
        },
        error => {
          console.error(error);
          setError(error);
          setLoading(false);
        }
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
        </>
    : <div className="nopdf">{loading && <CircularProgress />}{error && <div>There has been an unusual error from our side, please Try again later</div>}</div>;

}

export default PDFViewer;