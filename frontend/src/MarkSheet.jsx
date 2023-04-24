import React, {useState} from 'react'
import './MarkSheet.css';

const MarkSheet = () => {
    const [up, setUp] = useState(false);
   const handleChange = () => {
    console.log(up);
    setUp(!up);

   }
  return (
    <div className={!up ? "backward absolute left-0 right-0 z-30": "forward bottom-[-352px] absolute left-0 right-0 z-30"}>
      <button className={up?'bg-[#6FCF97] up':'up'} onClick={handleChange}><div className='flex flex-row items-center'>MarkSheet{up? <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6653 6.0636L8.33195 11.3969L2.99862 6.0636" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
:<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00757 11.6475L8.34974 6.32298L13.6742 11.6652" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}</div></button>
        <div className={"left-0 right-0 z-30"}>
            <div className="relative overflow-x-auto bg-[#EAE2FF]">
                <table className="w-full text-sm text-left text-[#454B54]  mx-10 my-6">
                    <thead className="text-base text-[#8F97A3] uppercase bg-white border-t-s border-#EAE2FF">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Question No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <input type="checkbox" onclick="return false" checked/>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Attempted
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Marks
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                <input type="checkbox"/>
                            </td>
                            <td className="px-6 py-4 flex flex-row items-center">
                                <span className="h-[7px] w-[7px] inline-block bg-[#66CCA7] rounded-md mr-1"></span> Attempted
                            </td>
                            <td className="px-6 py-4">
                                2
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                <input type="checkbox"/>
                            </td>
                            <td className="px-6 py-4 flex flex-row items-center">
                                <span className="h-[7px] w-[7px] inline-block bg-[#66CCA7] rounded-md mr-1"></span> Attempted
                            </td>
                            <td className="px-6 py-4">
                                2
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                <input type="checkbox"/>
                            </td>
                            <td className="px-6 py-4 flex flex-row items-center">
                                <span className="h-[7px] w-[7px] inline-block bg-[#66CCA7] rounded-md mr-1"></span> Attempted
                            </td>
                            <td className="px-6 py-4">
                                2
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                <input type="checkbox"/>
                            </td>
                            <td className="px-6 py-4 flex flex-row items-center">
                                <span className="h-[7px] w-[7px] inline-block bg-[#66CCA7] rounded-md mr-1"></span> Attempted
                            </td>
                            <td className="px-6 py-4">
                                2
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                <input type="checkbox"/>
                            </td>
                            <td className="px-6 py-4 flex flex-row items-center">
                                <span className="h-[7px] w-[7px] inline-block bg-[#66CCA7] rounded-md mr-1"></span> Attempted
                            </td>
                            <td className="px-6 py-4">
                                2
                            </td>
                        </tr>            
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default MarkSheet