import React from 'react'
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    var isLoggedIn = localStorage.getItem('isLoggedIn');
    var userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);

    return (
        <>
            {
                isLoggedIn ? 
                   <div className='sidenav '>

                        <ul class="list-group">
                            <li class="list-group-item sidebarProfile ">

                                <br />
                                <div>
                                    <img className='sidebarImg' src='aman.jpg' />
                                </div>
                                <br />
                                <div id='profile'>


                                    <Link className='' to={'/edit'}><span className='material-symbols-outlined sidebarLogo'>edit_square</span></Link>
                                </div>
                                <h6 id='name'>{userData.firstName}&nbsp;{userData.lastName}</h6>
                                <h6 id='post'>{userData.profile}</h6>
                                <h6 id='post'>{userData.role.roleName}</h6>
                            </li>
                            </ul>
                            {(userData.role.roleSideBarOptions.home === 'Yes') ? (
                                <Link to={'/'} className='link'><li class="list-group-item sidebar "> <span className='material-symbols-outlined sidebarLogo'>home_app_logo</span>Home</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.profile === 'Yes') ? (
                                <Link to={'/profile'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'><span class="material-symbols-outlined">badge</span></span>Profile</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.dashboard === 'Yes') ? (
                                <Link to={'/dashboard'} className='link'><li class="list-group-item sidebar "> <span className='material-symbols-outlined sidebarLogo'>empty_dashboard</span>Dashboard</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.order === 'Yes') ? (
                                <Link to={'/orders'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>fluid_med</span>Order</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.product === 'Yes') ? (
                                <Link to={'/products'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>science</span>Product</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.vendor === 'Yes') ? (
                                <Link to={'/vendors'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>diversity_3</span>Vendor</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.user === 'Yes') ? (
                                <Link to={'/user'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>person</span>User</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.notification === 'Yes') ? (
                                <Link to={'/notifications'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>notifications</span>Notifications</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.setting === 'Yes') ? (
                                <Link to={'/setting'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>settings</span>Settings</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.shipments === 'Yes') ? (
                                <Link to={'/shipments'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'><span class="material-symbols-outlined">local_shipping</span></span>Shipments</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.myOder === 'Yes') ? (
                                <Link to={'/myorders'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'><span class="material-symbols-outlined">list_alt</span></span>My Orders</li></Link>
                            ) : (<></>)}
                            {(userData.role.roleSideBarOptions.others === 'Yes') ? (
                                <Link to={'/others'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'><span class="material-symbols-outlined">settings_accessibility</span></span>Others</li></Link>
                            ) : (<></>)}
                            {/* <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>k</span>k</li></Link>
               
                <Link to={'#'} className='link'><li class="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>settings</span>Settings</li></Link> */}

                    </div>
                 : (
                    <></>
                )

            }

        </>
    )
}