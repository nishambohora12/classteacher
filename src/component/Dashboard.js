import React from 'react'
import { Link } from 'react-router-dom'
import DashboardTopgrid from './DashboardTopgrid'
import Dashboardsecgrid from './Dashboardsecgrid'
import Chart from './Chart'
export default function Dashboard() {
  return (
    <div>
      <DashboardTopgrid/>
      <Dashboardsecgrid/>
      <Chart/>
      </div>
  )
}
