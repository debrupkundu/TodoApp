import React, { useState } from 'react'
import { days } from '../constants'
const Days = () => {
    // days.forEach(function (entry) {
    //     console.log(entry);
    // });
    const [isOpen, setIsOpen] = useState(false)
    return (
        days.map((day) => <li className='list-none m-2 '>

            <div className=' bg-red-500 p-1 m-0 font-mono text-xl text-white rounded-lg font-bold'>
                {day}

                <button type='button' onClick={() => setIsOpen((prev) => !prev)} className='text-right mx-auto mb-1 flex  w-14 items-center justify-center rounded-full bg-white text-black'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>



                </button>


            </div>

        </li>)
    )

}

export default Days