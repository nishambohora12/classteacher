import React from 'react'
import { FaWindows } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import { HiCog } from 'react-icons/hi'
import { HiChatAlt2 } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { DashboardSideLinks } from '../sidebarnav'
import classNames from 'classnames'
const buttonlinks = 
    ' flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() 
{

   
    
    
    
    return (

        <div className=" bg-black w-60  p-5 flex flex-col text-white rounded-br-2xl  h-screen drop-shadow-3xl py-4 ">
            <div className='flex items-center gap-2 px-1 py-3'>
                <FaWindows fontSize={24} />
                <span className='text-neutral-100 text-lg'>Dashboard</span>




            </div>

            <div className='flex-1 py-8 flex flex-col gap-0.5 '>

                { DashboardSideLinks.map((item) => (
                    
                    <Sidebarlink key={item.key} item={item}/>)
               ) }

                
            
                
            </div>
             <div className='flex-2 py-8 flex flex-col gap-0.5' >

                <button className={buttonlinks} ><HiChatAlt2 fontSize={22} />Support</button>
                <button className={buttonlinks} ><HiCog fontSize={22} />Settings</button>
           
            </div>
            <div> <button className={buttonlinks} > <HiOutlineLogout fontSize={22} /> LOGOUT</button></div>

        </div>




    )
}


function Sidebarlink ({item})
 
    {
       const{ pathname } = useLocation()
     return (<Link to={item.path} className={classNames( pathname === item.path ? 'text-yellow-400 font-medium' : '',buttonlinks)}>
     {item.label}</Link>)
    }
   