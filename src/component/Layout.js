import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import DashboardTopgrid from './DashboardTopgrid'
import Dashboard from './Dashboard'


export default function Layout() {
  return (
    <div className='flex flex-col h-screen '>
      <div className='flex flex-1 '>
         <Sidebar />
        <div className="flex-1 ">
        <div> <Header  /> </div>


          <div className="  p-10"> {<Outlet />}</div>
      </div>
      </div>
      
      
    </div>
    

  )
}
