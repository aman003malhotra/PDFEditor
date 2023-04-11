import React from 'react'
import { Man } from "./Man.jsx";
const Main = () => {
  return (
    <div>
        <div className='flex flex-col px-6 py-7'>

        <div className='flex flex-row justify-between p-3.5 bg-[#F3F6F9] rounded-lg'>
            <div className="text-[#212121] text-lg leading-9 font-medium">Evaluations</div>
            <div>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
            </div>
        </div>
        <div class="relative overflow-x-auto p-1">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-[#F3F6F9] dark:bg-gray-700 dark:text-gray-400 p-1 rounded-md">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subject
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Upload Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Assigned Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Evaluated Date
                        </th>
                        <th>
                            Status
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-font-semibold text-[#464E5F] whitespace-nowrap p-1 flex flex-row items-center">
                            <Man />
                            Shiva Jaiswal
                        </th>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            History
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 text-[#ADA7FF] font-semibold">
                            Pending
                        </td>
                        <td class="px-6 py-4 font-semibold">
                            <button className="p-2 bg-[#C9F7F5] text-[#1BC5BD] rounded-md">Evaluate</button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-font-semibold text-[#464E5F] whitespace-nowrap p-1 flex flex-row items-center">
                            <Man />
                            Shiva Jaiswal
                        </th>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            History
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 text-[#ADA7FF] font-semibold">
                            Pending
                        </td>
                        <td class="px-6 py-4 font-semibold">
                            <button className="p-2 bg-[#C9F7F5] text-[#1BC5BD] rounded-md">Evaluate</button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-font-semibold text-[#464E5F] whitespace-nowrap p-1 flex flex-row items-center">
                            <Man />
                            Shiva Jaiswal
                        </th>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            History
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 text-[#ADA7FF] font-semibold">
                            Pending
                        </td>
                        <td class="px-6 py-4 font-semibold">
                            <button className="p-2 bg-[#C9F7F5] text-[#1BC5BD] rounded-md">Evaluate</button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-font-semibold text-[#464E5F] whitespace-nowrap p-1 flex flex-row items-center">
                            <Man />
                            Shiva Jaiswal
                        </th>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            History
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 text-[#ADA7FF] font-semibold">
                            Pending
                        </td>
                        <td class="px-6 py-4 font-semibold">
                            <button className="p-2 bg-[#C9F7F5] text-[#1BC5BD] rounded-md">Evaluate</button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-font-semibold text-[#464E5F] whitespace-nowrap p-1 flex flex-row items-center">
                            <Man />
                            Shiva Jaiswal
                        </th>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            History
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 font-font-semibold text-[#464E5F]">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4">
                            04 Apr 2023
                        </td>
                        <td class="px-6 py-4 text-[#ADA7FF] font-semibold">
                            Pending
                        </td>
                        <td class="px-6 py-4 font-semibold">
                            <button className="p-2 bg-[#C9F7F5] text-[#1BC5BD] rounded-md">Evaluate</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex flex-row bg-[#F3F6F9] p-2.5 rounded-lg mt-3 justify-between items-center">
            <span class="text-sm text-gray-700 dark:text-gray-400">
                Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
                <button class="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Prev
                </button>
                <button class="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main