import React, { useEffect, useState } from 'react';
import { CgDebug, CgChevronLeft, CgChevronRight, CgArrowsExpandDownRight } from 'react-icons/cg';
import { BsFillPenFill } from 'react-icons/bs';
import { RiImageEditFill } from 'react-icons/ri';
import AnnotatablePage from './AnnotatablePage';
import { extendTarget } from '../PDFAnnotation';
import {useDispatch, useSelector} from 'react-redux';

const PaginatedViewer = props => {

  const p = useSelector(state=> state.current_page);
  const total_p = useSelector(state=> state.total_pages);
  const paintToggle = useSelector(state=> state.paintToggle);
  
  const [ page, setPage ] = useState();

  const [ debug, setDebug ] = useState(false);

  const [ annotationMode, setAnnotationMode ] = useState('ANNOTATION');

  const dispatch = useDispatch();

  // Render first page on mount
  useEffect(() => {
    props.pdf.getPage(p).then(setPage);

    dispatch({type:"SET_TOTAL_PAGES", payload:props.pdf.numPages});
    
  }, [p]);

  const onPreviousPage = () => {
    const { pageNumber } = page;
    const prevNum = Math.max(0, pageNumber - 1);
    if (prevNum !== pageNumber)
      props.pdf.getPage(prevNum).then(page => {
        setPage(page)
        dispatch({type:"CHANGE_PAGE_NUM", payload:page})
      });
  }

  const onNextPage = () => {
    const { numPages } = props.pdf;
    const { pageNumber } = page;
    const nextNum = Math.min(pageNumber + 1, numPages);
    if (nextNum !== pageNumber)
      props.pdf.getPage(nextNum).then(page => {
        setPage(page)
        dispatch({type:"CHANGE_PAGE_NUM", payload:page})
      });
  }

  const onToggleRelationsMode = () => {
    dispatch({type:"PAINT_TOGGLE", payload:false});
    if (annotationMode === 'RELATIONS')
      setAnnotationMode('ANNOTATION');
    else
      setAnnotationMode('RELATIONS'); 
  }

  const onTogglePaintMode = () => {
    dispatch({type:"PAINT_TOGGLE", payload:!paintToggle});
    
    if(annotationMode === 'PEN'){
      setAnnotationMode('IMAGE');
    }else{
      setAnnotationMode('PEN');
    }
  }

  const onToggleImageMode = () => {
    dispatch({type:"PAINT_TOGGLE", payload:false});
    if (annotationMode === 'IMAGE')
      setAnnotationMode('ANNOTATION');
    else
      setAnnotationMode('IMAGE');
  }

  const onCreateAnnotation = a => {
    const extended = extendTarget(a, props.url, page.pageNumber);
    props.onCreateAnnotation && props.onCreateAnnotation(extended);
  }

  const onUpdateAnnotation = (a, p) => {
    const updated = extendTarget(a, props.url, page.pageNumber);
    const previous = extendTarget(p, props.url, page.pageNumber);
    props.onUpdateAnnotation && props.onUpdateAnnotation(updated, previous);
  }
    
  const onDeleteAnnotation = a => {
    const extended = extendTarget(a, props.url, page.pageNumber);
    props.onDeleteAnnotation && props.onDeleteAnnotation(extended);
  }
  
  return (
    <div>
      <header>
        <button onClick={() => setDebug(!debug)}>
          <span className="inner">
            <CgDebug />
          </span>
        </button>

        <button onClick={onPreviousPage}>
          <span className="inner">
            <CgChevronLeft />
          </span>
        </button>

        <label>{page?.pageNumber} / {total_p}</label>
        
        <button onClick={onNextPage}>
          <span className="inner">
            <CgChevronRight />
          </span>
        </button>

        <button 
          className={annotationMode === 'RELATIONS' ? 'active' : null} 
          onClick={onToggleRelationsMode}>
          <span className="inner">
            <CgArrowsExpandDownRight />
          </span>
        </button>

        <button
          className={annotationMode === 'IMAGE' ? 'active' : null} 
          onClick={onToggleImageMode}>
          <span className="inner">
            <RiImageEditFill />
          </span>
        </button>

        <button
          className={paintToggle ? 'active' : null} 
          onClick={onTogglePaintMode}>
          <span className="inner">
            <BsFillPenFill />
          </span>
        </button>
      </header>

      <main>
        <div className="pdf-viewer-container">
          <AnnotatablePage 
            page={page} 
            annotations={page ? props.store.getAnnotations(page.pageNumber) : []}
            config={props.config}
            debug={debug} 
            annotationMode={annotationMode} 
            onCreateAnnotation={onCreateAnnotation}
            onUpdateAnnotation={onUpdateAnnotation}
            onDeleteAnnotation={onDeleteAnnotation} 
            onCancelSelected={props.onCancelSelected} 
            />
        </div>
      </main>
    </div>
  )

}

export default PaginatedViewer;