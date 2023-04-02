import { useState } from 'react';
import{ CirclePicker } from 'react-color';
import './PenFunction.css';
import { useDispatch, useSelector } from 'react-redux';

const PenFunction = () => {

    const dispatch = useDispatch();
    const eraseMode = useSelector(state => state.eraseMode);
    const paintMode = useSelector(state => state.paintMode);
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
        console.log("erase mode changed");
        dispatch({type:"ERASE_MODE", payload:true});
        dispatch({type:"PAINT_MODE", payload:false});
    }

    const togglePaintMode = () => {
        console.log("paint mode changed");
        dispatch({type:"PAINT_MODE", payload:true});
        dispatch({type:"ERASE_MODE", payload:false});
    }
 
  return (
    <div className='fixed flex flex-row items-center right-0 bottom-0 left-[220px] bg-white z-10 justify-evenly'>
    <CirclePicker onChangeComplete = {changeColor} />
    <div 
    class="edit" 
    onClick={togglePaintMode}
    style={{'background-color':paintMode ? "#87898B":"#ffffff"}}
    >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.69063 20.25H4.5C4.30109 20.25 4.11033 20.171 3.96967 20.0304C3.82902 19.8897 3.75 19.699 3.75 19.5V15.3094C3.74966 15.212 3.76853 15.1155 3.80553 15.0254C3.84253 14.9354 3.89694 14.8534 3.96563 14.7844L15.2156 3.53441C15.2854 3.46355 15.3686 3.40728 15.4603 3.36886C15.5521 3.33045 15.6505 3.31067 15.75 3.31067C15.8495 3.31067 15.9479 3.33045 16.0397 3.36886C16.1314 3.40728 16.2146 3.46355 16.2844 3.53441L20.4656 7.71567C20.5365 7.78545 20.5928 7.86864 20.6312 7.96038C20.6696 8.05212 20.6894 8.15058 20.6894 8.25004C20.6894 8.3495 20.6696 8.44796 20.6312 8.5397C20.5928 8.63144 20.5365 8.71463 20.4656 8.78441L9.21563 20.0344C9.1466 20.1031 9.06469 20.1575 8.9746 20.1945C8.88452 20.2315 8.78802 20.2504 8.69063 20.25V20.25Z" 
        stroke={paintMode ? "white":"gray"} 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
        <path d="M12.75 6L18 11.25" 
        stroke={paintMode ? "white":"gray"} 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
        </svg>
    </div>
    <div class="erase" 
    onClick={toggleEraseMode}
    style={{'background-color':eraseMode ? "#87898B":"#ffffff"}}
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.04779 8.79779C8.34069 8.5049 8.81556 8.5049 9.10846 8.79779L15.4741 15.1634C15.767 15.4563 15.767 15.9312 15.4741 16.2241C15.1812 16.517 14.7063 16.517 14.4134 16.2241L8.04779 9.85845C7.7549 9.56556 7.7549 9.09069 8.04779 8.79779Z" 
        fill="#87898B"
        stroke={eraseMode ? "white":"gray"} 
        />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9438 4.33923C14.8459 4.33923 14.7489 4.35864 14.6586 4.39633C14.5683 4.43402 14.4863 4.48925 14.4174 4.55883L14.4147 4.56154L3.80889 15.1673C3.73932 15.2362 3.68409 15.3182 3.64639 15.4085C3.6087 15.4989 3.58929 15.5958 3.58929 15.6937C3.58929 15.7916 3.6087 15.8885 3.64639 15.9789C3.68409 16.0692 3.73931 16.1512 3.80889 16.2201L3.8116 16.2227L7.07005 19.4812H10.0958L19.717 9.86921C19.8568 9.72569 19.9351 9.53321 19.9351 9.33276C19.9351 9.13238 19.8568 8.93996 19.7171 8.79646L15.4701 4.55884C15.4012 4.48926 15.3193 4.43402 15.2289 4.39633C15.1386 4.35864 15.0417 4.33923 14.9438 4.33923ZM10.4069 20.9812H20.25C20.6642 20.9812 21 20.6454 21 20.2312C21 19.817 20.6642 19.4812 20.25 19.4812H12.2181L20.7801 10.9274L20.7852 10.9223C21.2017 10.4981 21.4351 9.92729 21.4351 9.33276C21.4351 8.73823 21.2017 8.16745 20.7852 7.74324L16.5362 3.50357C16.5355 3.50294 16.5349 3.50231 16.5343 3.50169C16.3263 3.2921 16.079 3.12567 15.8065 3.01198C15.5331 2.89795 15.2399 2.83923 14.9438 2.83923C14.6476 2.83923 14.3544 2.89795 14.0811 3.01198C13.8084 3.12574 13.5609 3.2923 13.3529 3.50206C13.3524 3.50257 13.3519 3.50307 13.3514 3.50357L2.75363 14.1013C2.75313 14.1018 2.75263 14.1023 2.75212 14.1028C2.54236 14.3108 2.3758 14.5583 2.26204 14.831C2.14801 15.1043 2.08929 15.3975 2.08929 15.6937C2.08929 15.9899 2.14801 16.2831 2.26204 16.5564C2.37578 16.829 2.54231 17.0765 2.75203 17.2845C2.75256 17.285 2.7531 17.2856 2.75363 17.2861L6.22905 20.7615C6.36971 20.9022 6.56047 20.9812 6.75938 20.9812H10.4056C10.4061 20.9812 10.4065 20.9812 10.4069 20.9812Z" 
        fill="#87898B"
        stroke={eraseMode ? "white":"gray"} 
        />
        </svg>
    </div>
    <input type="range" min="0" max="20" step="0.1" value={lineWidth}  className="slider" id="myRange" onChange={changeLineWidth}/>
    <button class="save">
Save    
</button>
<button class="cancel">
Cancel
</button>
</div>
  )
};

export default PenFunction