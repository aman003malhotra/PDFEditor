import React from 'react';
import { ManSVG } from './ManSVG';
import WomanSVG from './WomanSVG';
import { Link } from "react-router-dom";

const EvaluationRow = ({data}) => {

    const handleEvaluateButton = (pdfName) =>{
        localStorage.setItem('selected_pdf', pdfName);
    }

  return (
    <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-font-semibold text-[#464E5F] whitespace-nowrap p-1 flex flex-row items-center">
                {data.gender === 'male' ? <ManSVG />  : <WomanSVG />}
                <div className='flex flex-col'>{data.name}<span className='text-[#B5B5C3] text-sm'>{data.exam}</span></div>
            </th>
            <td className="px-6 py-4 font-semibold text-[#464E5F]">
                {data.Subject}
            </td>
            <td className="px-6 py-4 font-semibold text-[#464E5F]">
                <div className='flex flex-col'>{data.upload_date}<span className='text-[#B5B5C3] text-sm'>{data.upload_time}</span></div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#464E5F]">
                <div className='flex flex-col'>{data.assigned_date}<span className='text-[#B5B5C3] text-sm'>{data.assigned_time}</span></div>
            </td>
            <td className="px-6 py-4">
                <div className='flex flex-col'>{data.evaludated_date}<span className='text-[#B5B5C3] text-sm'>{data.evaluated_time}</span></div>
            </td>
            <td className="px-6 py-4 font-semibold">
                <span className={data.status === 'Pending'? 'text-[#ADA7FF]' : data.status === 'Delayed' ?'text-[#FF0000]': 'text-[#1BC5BD]'}>{data.status}</span>
            </td>
            <td className="px-6 py-4 font-semibold">
                <Link to="/addPdf"><button className="p-2 bg-[#C9F7F5] text-[#1BC5BD] rounded-md" onClick={() => handleEvaluateButton(data.pdf)}>Evaluate</button></Link>
            </td>
        </tr>
    </>
  )
}

export default EvaluationRow;