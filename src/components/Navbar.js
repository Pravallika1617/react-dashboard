import React from 'react'
import dashboard from '../images/dashboard.png'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-head'>
                <h2><i className="fa-solid fa-child-reaching"></i>Friendchised</h2>
                <div className='nav-details'>
                    <h3><i className="fa-solid fa-square-poll-horizontal"></i>Production</h3>
                    <h3><i className="ri-pentagon-line"></i>Sandbox</h3>
                </div>
                <img src={dashboard} alt='' />
            </div>

            <div className='nav-items'>
                <h4>Menu</h4>
                <p><i className="ri-home-5-line"></i>Dashboard</p>
                <p><i className="fa-solid fa-chart-line"></i>Customers</p>
                <p><i className="fa-solid fa-arrow-up-right-dots"></i>Activity <i class="fa-solid fa-square-caret-down"></i></p>
                <p><i className="ri-community-line"></i>Merchant<i class="fa-solid fa-square-caret-down"></i></p>
                <p><i className="ri-file-transfer-fill"></i>Transactions<i class="fa-solid fa-square-caret-down"></i></p>
                <p><i className="fa-solid fa-chart-line"></i>Log Activity</p>
                <p><i className="fa-solid fa-tag"></i>Banner Promo</p>
                <hr />
                <p><i className="fa-solid fa-user"></i>User Role Admin</p>
                <p><i className="fa-solid fa-gear"></i>Settings</p>
                
            </div>
            <div className='logout'>
                    <p><i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight: '10px'}}></i>Log out</p>
                </div>
        </div>
    )
}

export default Navbar;
