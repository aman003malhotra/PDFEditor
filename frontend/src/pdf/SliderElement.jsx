import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

const SliderElement = ({pageNum}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type:"CHANGE_PAGE_NUM", payload:pageNum})
    }
  return (
    <div
        className='w-[139px] h-[136px] mx-4 inline-block p-2 cursor-pointer rounded-lg ease-in-out duration-300 bg-[#ADA7FF] text-white font-bold'
        onClick={()=>{handleClick()}}
    >
        <p className='items-center justify-center'>{pageNum} Page</p>
    </div>
  )
}

export default SliderElement