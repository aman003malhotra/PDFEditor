import React, {useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import uuid from 'react-uuid';
import EvaluationRow from './EvaluationRow';

const Main = () => {

    const [evaluationData, setEvaluationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] =  useState(6);
    const [nPages, setNPages] = useState(0);
    const [indexOfLastRecord, setIndexOfLastRecord] = useState(6);
    const [indexOfFirstRecord, setIndexOfFirstRecord] = useState(0);
    const [currentRecords, setCurrentRecords] = useState([]);
    const [totalEnteries, setTotalEnteries] = useState(0);
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        fetch('EvaluationData.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setEvaluationData(data);
            setLoading(false);
            setCurrentRecords(data.slice(indexOfFirstRecord, indexOfLastRecord));
            setNPages(Math.ceil(data.length / recordsPerPage));
            setTotalEnteries(data.length);
        })
        .catch(() => {
            setError("There was an error Loading the Data, Please Try again Later");
            setLoading(false);
        })
    }, [])

    useEffect(()=> {
        setCurrentRecords(evaluationData ? evaluationData.slice(indexOfFirstRecord, indexOfLastRecord): null);  
        setIndexOfLastRecord(currentPage * recordsPerPage);
        setIndexOfFirstRecord(indexOfLastRecord - recordsPerPage);
    }, [indexOfFirstRecord, indexOfLastRecord, currentPage])
  return (
    <div className="relative h-[100vh]">
        {loading && <CircularProgress />}
        {error && <span>{error}</span>}
        {!error && evaluationData && currentRecords && 
        <div className='flex flex-col px-6 py-7 overflow-scroll'>
            <div className='flex flex-row justify-between p-3.5 bg-[#F3F6F9] rounded-lg'>
                <div className="text-[#212121] text-lg leading-9 font-medium">Evaluations</div>
                <div>   
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto p-1">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-[#F3F6F9] p-1 rounded-md">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Upload Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Assigned Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Evaluated Date
                            </th>
                            <th>
                                Status
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            currentRecords.map(singleEvaluation => (
                                <EvaluationRow key={uuid()} data={singleEvaluation} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row bg-[#F3F6F9] p-2.5 rounded-lg mt-3 justify-between items-center absolute left-0 right-0 bottom-0">
                <span className="text-sm text-[#B5B5C3]">
                    Showing <span className="font-semibold text-[#212121]">{indexOfFirstRecord + 1}</span> to <span className="font-semibold text-[#212121]">{indexOfLastRecord > totalEnteries ? totalEnteries : indexOfLastRecord}</span> of <span className="font-semibold text-[#212121]">{evaluationData.length}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button onClick={prevPage} className="px-4 py-2 text-sm font-medium text-white bg-[#ADA7FF] rounded-l hover:bg-[#615EEA]">
                        Prev
                    </button>
                    <button onClick={nextPage} className="px-4 py-2 text-sm font-medium text-white bg-[#ADA7FF] border-0 border-l border-gray-700 rounded-r hover:bg-[#615EEA]">
                        Next
                    </button>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Main