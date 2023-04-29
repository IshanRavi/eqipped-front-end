
import React from 'react'
import '../css/Dashboard.css'
import Sidebar from '../../pages/view/Sidebar'
import DashboardCards from '../../pages/view/DashboardCard'
// import Graph from '../../pages/view/Graph'
function Dashboard() {

  return (
    <div>
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-1">
            <ul class="list-group list-group-flush">
              <Sidebar />
            </ul>
          </div>
          <div class="col-11">
            <DashboardCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
