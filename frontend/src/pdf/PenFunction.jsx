import { useState } from 'react';
import{ CirclePicker } from 'react-color';
import './PenFunction.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaUndo, FaRedo } from 'react-icons/fa'

const PenFunction = () => {

    const dispatch = useDispatch();
    const eraseMode = useSelector(state => state.eraseMode);
    const paintMode = useSelector(state => state.paintMode);
    const historyIndex = useSelector(state => state.historyIndex);
    const history = useSelector(state => state.history);
    const [lineWidth, setLineWidth] = useState(5);
    const changeColor = (color) => {
        console.log(color.hex);
        let hexa = color.hex
        console.log(typeof(hexa));
        dispatch({type:"CHANGE_COLOR", payload:hexa})
    }

    const changeLineWidth = (e) => {
        setLineWidth(e.target.value);
        console.log(lineWidth);
        dispatch({type:"CHANGE_LINE_WIDTH", payload:e.target.value})
    }

    const togglePaintMode = () => {
        console.log("paint mode changed");
        dispatch({type:"PAINT_MODE", payload:!paintMode});
    }


    const undoButton = () => {
        if(historyIndex > 0){
            dispatch({type:"HISTORY_INDEX_DECREMENT"});
        }
    }

    const redoButton = () => {
        if(historyIndex < history.length - 1){
            dispatch({type:"HISTORY_INDEX_INCREMENT"});
        }
    }
 
  return (
    <div className='absolute flex flex-row items-center right-0 left-0 bottom-0 bg-white z-10 justify-evenly'>
    <CirclePicker onChangeComplete = {changeColor} />
    <button className="rubutton" onClick={undoButton}>
        <FaUndo />
    </button>
    <div 
    className="edit" 
    onClick={togglePaintMode}
    style={{'backgroundColor':paintMode ? "#ADA7FF":"#ffffff"}}
    >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.69063 20.25H4.5C4.30109 20.25 4.11033 20.171 3.96967 20.0304C3.82902 19.8897 3.75 19.699 3.75 19.5V15.3094C3.74966 15.212 3.76853 15.1155 3.80553 15.0254C3.84253 14.9354 3.89694 14.8534 3.96563 14.7844L15.2156 3.53441C15.2854 3.46355 15.3686 3.40728 15.4603 3.36886C15.5521 3.33045 15.6505 3.31067 15.75 3.31067C15.8495 3.31067 15.9479 3.33045 16.0397 3.36886C16.1314 3.40728 16.2146 3.46355 16.2844 3.53441L20.4656 7.71567C20.5365 7.78545 20.5928 7.86864 20.6312 7.96038C20.6696 8.05212 20.6894 8.15058 20.6894 8.25004C20.6894 8.3495 20.6696 8.44796 20.6312 8.5397C20.5928 8.63144 20.5365 8.71463 20.4656 8.78441L9.21563 20.0344C9.1466 20.1031 9.06469 20.1575 8.9746 20.1945C8.88452 20.2315 8.78802 20.2504 8.69063 20.25V20.25Z" 
        stroke={paintMode ? "white":"#ADA7FF"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
        <path d="M12.75 6L18 11.25" 
        stroke={paintMode ? "white":"#ADA7FF"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
        </svg>
    </div>
    <button className="rubutton" onClick={redoButton}>
        <FaRedo />
    </button>
    <input type="range" min="0" max="20" step="0.1" value={lineWidth}  className="slider" id="myRange" onChange={changeLineWidth}/>
    <button className="save">
        Save    
    </button>
    <button className="cancel" onClick={() => (dispatch({type:"PAINT_TOGGLE", payload:false}))}>
        Cancel
    </button>    
</div>
  )
};

export default PenFunction