import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
     <Sidebar />
      <div className="flex-1">
        <div> <Header /> </div>
        <div className="p-4"> {<Outlet />}</div>
      </div>
      
      
    </div>
    

  )
}
