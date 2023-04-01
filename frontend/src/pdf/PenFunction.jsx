import { useState } from 'react';
import{ CirclePicker } from 'react-color';
import './PenFunction.css';
import { useDispatch, useSelector } from 'react-redux';

const PenFunction = () => {

    const dispatch = useDispatch();
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

    const toggleEraseMode = () => {
        dispatch({type:"ERASE_MODE"})
    }

  return (
    <div className='fixed flex flex-row items-center right-0 bottom-0 left-[220px] bg-white z-10 justify-evenly'>
        <CirclePicker onChangeComplete = {changeColor} />
        <input type="range" min="0" max="10" step="0.1" value={lineWidth} className="range-slider" onChange={changeLineWidth}/>
        <button onClick = {toggleEraseMode}>Erase</button>
    </div>
  )
};

export default PenFunction