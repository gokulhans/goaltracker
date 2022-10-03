import React from 'react'

function Smallprogress() {
    return (
        <div>
            <div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-indigo-500 text-xs h-4 font-bold text-white flex items-center justify-center text-center p-0.3 leading-none rounded-full" style={{ "width": 45 + '%' }}> 45%</div>
                </div>
            </div>
        </div>
    )
}

export default Smallprogress