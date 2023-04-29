import React from 'react'
import '../css/DashboardCard.css'
import { Link } from 'react-router-dom';


function DashboardCards() {

  return (
    <>
      <div class="container text-center dashboardCard ">
        <div class="row">
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Orders</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder'>256 New Orders</Link>
              <br />
              <Link className='viewAllOrders'>View All Orders</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>fluid_med</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Products</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder'>256 New Products</Link>
              <br />
              <Link className='viewAllOrders'>View All Products</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>science</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Vendors</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder'>256 New Venders</Link>
              <br />
              <Link className='viewAllOrders'>View All Venders</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>diversity_3</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Users</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder'>256 New Users</Link>
              <br />
              <Link className='viewAllOrders'>View All Users</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>person</span></p>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}

export default DashboardCards;
