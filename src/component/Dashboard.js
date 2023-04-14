import React from 'react'
import { Link } from 'react-router-dom'
import DashboardTopgrid from './DashboardTopgrid'
import Dashboardsecgrid from './Dashboardsecgrid'

export default function Dashboard() {
  return (
    <div>
      <DashboardTopgrid/>
      <Dashboardsecgrid/>
     
      </div>
  )
}
