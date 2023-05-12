import React from 'react'
import { Link } from 'react-router-dom'


function Cart() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    var userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    return (
        <div>
            {
                isLoggedIn ? (
                    <div className='cartdiv'>

                        <Link to={'/cart'} className='link'><li><span className='material-symbols-outlined sidebarLogo'><span class="material-symbols-outlined" className='logo'>shopping_cart</span></span>CART</li></Link>
                    </div>



                ) : (
                    <></>
                )


            }
        </div>
    )
}

export default Cart
