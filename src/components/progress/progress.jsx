import React from 'react'

function Progress() {
    return (
        <div className='mx-4 mb-8'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-indigo-500 text-md h-11 font-bold text-white flex items-center justify-center text-center p-0.5 leading-none rounded-full" style={{"width": 45+'%'}}> 45%</div>
            </div>
        </div>
    )
}

export default Progress