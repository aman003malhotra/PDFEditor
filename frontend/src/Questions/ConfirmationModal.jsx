import React from 'react'

const ConfirmationModal = ({handleEvaluatedToggle}) => {
  return (
    <div id="popup-modal" tabIndex="-1" className="flex items-center justify-center modalCSS fixed z-[100] p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full">
        <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow p-5">
                <h2 class="m-4 text-xl font-medium text-black text-center">Are you sure?</h2>
                <div className="p-6 text-center">
                    <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure that current copy is evaluated ? once you submit the <span className='text-[#EB5757]'>evaluated</span> copies you can’t change anything and this copy will be sent for <span className='text-[#EB5757]'>review</span>.</h3>
                    <button data-modal-hide="popup-modal" type="button" className="text-white bg-[#6FCF97] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={handleEvaluatedToggle}>
                        Yes, Submit
                    </button>
                    <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={handleEvaluatedToggle}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal