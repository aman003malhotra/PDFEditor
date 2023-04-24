import React, { useEffect, useState } from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import SliderElement from './SliderElement';
import { useSelector } from 'react-redux';

function Slider() {

    const [pageAr, setPageArr] = useState([]);
    const total_p = useSelector(state=> state.total_pages);
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
     useEffect(() => {
        const pageArr = []
        if(total_p){
          for(let i=1;i<=total_p;i++){
          pageArr.push(
            <SliderElement pageNum={i} key={i}/>
          ) 
          }
        }
        setPageArr([...pageAr,...pageArr ])
     }, [total_p]);

      
    
      return (
        <>
        
          <div className='absolute flex items-center right-0 left-0 bottom-0 bg-white z-10 pb-12'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div
              id='slider'
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
            >
              {
                pageAr.map(item => (
                  item
                ))
              }

              
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
          </div>
        </>
      );
}

export default Slider
