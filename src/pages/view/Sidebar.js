import React from 'react'
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>

            <div className='sidenav '>


                <li class="list-group-item sidebarProfile ">
                
                <br/>
                    <div>
                        <img className='sidebarImg' src='aman.jpg' />
                    </div>
                    <br />
                    <div id='profile'>
                        
                        
                        <Link className='' to={'/edit'}><span className='material-symbols-outlined sidebarLogo'>edit_square</span></Link>
                    </div>
                    <h6 id='name'>Aman Kumar</h6>
                    <h6 id='post'>Tech Lead</h6>
                </li>
                <Link to={'#'} className='link'><li class="list-group-item sidebar "> <span className='material-symbols-outlined sidebarLogo'>empty_dashboard</span>Dashboard</li></Link>
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>fluid_med</span>Order</li></Link>
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>science</span>Product</li></Link>
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>diversity_3</span>Vendor</li></Link>
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>person</span>User</li></Link>
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>notifications</span>Notifications</li></Link>
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>settings</span>Settings</li></Link>

                {/* <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>k</span>k</li></Link>
               
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>settings</span>Settings</li></Link> */}

            </div>

        </>
    )
}