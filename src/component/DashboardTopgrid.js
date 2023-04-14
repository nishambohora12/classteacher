import React from 'react'
import img from './dummyteacher.png'
export default function DashboardTopgrid() {
    return (
        <div className='w-full h-auto '>
            <div className='text-black rounded-xl p-4 flex flex-row font-light bg-stone-300 shadow-lg shadow-black-500/50 items-center  '>
                <div ><img src={img} className='w-auto h-auto' /></div>
                <div ><span className='text-neutral-900 text-lg items-center p-10 shadow-lg shadow-black-500/50'>Welcome to student Management System</span> </div>
                
            </div>
        </div>


    )
}
