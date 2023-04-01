import React, { useEffect, useRef, useState } from 'react';
import * as PDFJS from 'pdfjs-dist/legacy/build/pdf';
import { Recogito } from '@recogito/recogito-js/src';
import { Annotorious } from '@recogito/annotorious/src';
import { useSelector } from 'react-redux';
import { splitByType } from '../PDFAnnotation';

const AnnotatablePage = props => {

  const containerEl = useRef();

  const [ anno, setAnno ] = useState();

  const [ recogito, setRecogito ] = useState();
  const [lineWidth, setLineWidth] = useState(5);
  const [isPainting, setIsPainting] = useState(false);

  const[startPainting, setStartPainting] = useState(false);
  const [startX, setStartX] = useState();
  const [startY, setStartY] = useState();
  const paintMode = useSelector(state=> state.paintMode);
  // const canvas = document.createElement('canvas');
  // const ctx = canvas.getContext('2d');
  // ctx.strokeStyle = "black";
  // Cleanup previous Recogito instance, canvas + text layer
  const destroyPreviousPage = () => {
    // Clean up previous Recogito + Annotorious instance, if any
    if (recogito)
      recogito.destroy();

    if (anno)
      anno.destroy();

    let canvas = containerEl.current.querySelector('canvas');
    if (canvas)
      containerEl.current.removeChild(canvas);

    const textLayer = containerEl.current.querySelector('.textLayer');
    textLayer.innerHTML = '';
  }

  const handleMouseDown = (e) =>{
    console.log("mouse down");
    setIsPainting(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  }

  const handleMouseUp = (e) => {
    console.log("mouse up")
    setIsPainting(false);
    let canvas  = containerEl.current.querySelector('canvas');
    canvas.getContext('2d').stroke();
    canvas.getContext('2d').beginPath();
      let imageData = canvas.toDataURL('image/png', 1.0);
      console.log(imageData);
      localStorage.setItem(props.page, imageData);
  }

  const handleMouseMove = (e) => {
    if(paintMode){
      if(!isPainting) {
        return;
      }
      console.log(e.clientX);
      console.log("drawing");
      let canvas  = containerEl.current.querySelector('canvas');
  
      canvas.getContext('2d').lineWidth = 5;
      canvas.getContext('2d').lineCap = 'round';
  
      canvas.getContext('2d').lineTo(e.clientX -  canvas.getBoundingClientRect().left , e.clientY - canvas.getBoundingClientRect().top);
      canvas.getContext('2d').stroke();
    }
  }

  // Render on page change
  useEffect(() => {
    destroyPreviousPage();

    if (props.page) {
      const scale = props.scale || 1.8;
      const viewport = props.page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      // const ctx = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.getContext('2d').strokeStyle = "blue";
      canvas.getContext('2d').strokeRect(10, 10, 100, 100);
      containerEl.current.appendChild(canvas);
      
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseup', handleMouseUp);
      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport
      };

      props.page.render(renderContext);

      props.page.getTextContent().then(textContent => PDFJS.renderTextLayer({
        textContent: textContent,
        container: containerEl.current.querySelector('.textLayer'),
        viewport: viewport,
        textDivs: []
      }).promise.then(() => {
        const config = props.config || {};

        const { text, image } = splitByType(props.annotations);

        const r = new Recogito({ 
          ...config,
          content: containerEl.current.querySelector('.textLayer'), 
          mode: 'pre' 
        });
        
        r.on('createAnnotation', a => props.onCreateAnnotation(a));
        r.on('updateAnnotation', (a, p) => props.onUpdateAnnotation(a, p));
        r.on('deleteAnnotation', a => props.onDeleteAnnotation(a));
        r.on('cancelSelected', a => props.onCancelSelected(a));

        // TODO split: text annotations only
        r.setAnnotations(text);
        setRecogito(r);
        
        const anno = new Annotorious({
          ...config,
          image: canvas
        });

        anno.on('createAnnotation', a => props.onCreateAnnotation(a));
        anno.on('updateAnnotation', (a, p) => props.onUpdateAnnotation(a, p));
        anno.on('deleteAnnotation', a => props.onDeleteAnnotation(a));
        anno.on('cancelSelected', a => props.onCancelSelected(a));

        anno.setAnnotations(image);
        setAnno(anno);

        r.on('selectAnnotation', () => anno.selectAnnotation());
        anno.on('selectAnnotation', () => r.selectAnnotation());
      }));
    }
  }, [props.page ]);

  useEffect(() => {
    // Hack
    if (recogito && recogito.getAnnotations() === 0) {
      recogito.setAnnotations(props.annotations);
    }
  }, [ props.annotations ]);

  useEffect(() => {
    if (containerEl.current) {
      const imageLayer = containerEl.current.querySelector('svg.a9s-annotationlayer');
      
      if (imageLayer) {
        if (props.annotationMode === 'IMAGE') {
          imageLayer.style.pointerEvents = 'auto';
        } else {
          imageLayer.style.pointerEvents = null;
          recogito.setMode(props.annotationMode);
        }
      }
    }
  }, [ props.annotationMode ])

  return (
    <div
      ref={containerEl} 
      className={props.debug ? 'page-container debug' : 'page-container'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp} 
      onMouseMove={(e) => {handleMouseMove(e)}} >
      <div className="textLayer" />
    </div>
  )

}

export default AnnotatablePage;