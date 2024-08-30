import React from 'react'
import './section.css'
import photo from '../images/photo.jpg'
import barchart from '../images/barchart.gif'
import barchart1 from '../images/barchart1.png'
import bar1 from '../images/bar1.png'
import bar2 from '../images/bar2.png'
import bar3 from '../images/bar3.png'


function Section() {
    return (
        <div className='section-container'>
            <div className='section-head'>
                <h2>Friendchised Dashboard Admin</h2>
                <div className='section-head-icon'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-envelope-circle-check"></i>
                </div>
                <div className='section-img'>
                    <img src={photo} alt='' />
                    <div className='section-profile'>
                        <p>C. Ronaldo</p>
                        <p style={{ color: "darkgray", fontSize: '13px' }}>Greatest of All Time</p>
                    </div>
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>

            <hr />

            <div className='section-body'>
                <div className='section-body-title'>
                    <h4>Dashboard</h4>
                    <p>Dashboard<i className="fa-solid fa-arrow-right"></i>Performance<i className="fa-solid fa-arrow-right" style={{ color: 'black' }}></i><b style={{ color: 'black' }}>Summary</b></p>
                </div>

                <div className='section-body-cards'>
                    <div className='section-card'>
                        <p style={{ color: 'orange' }}>New Review</p>
                        <h5>1081</h5>
                    </div>
                    <div className='section-card'>
                        <p style={{ color: 'black' }}>Waiting List</p>
                        <h5>2809</h5>
                    </div>
                    <div className='section-card'>
                        <p style={{ color: 'teal' }}>Listed Merchant</p>
                        <h5>323</h5>
                    </div>
                    <div className='section-card'>
                        <p style={{ color: 'darkgray' }}>Suspended Merchant</p>
                        <h5>311</h5>
                    </div>
                </div>

                {/* <hr /> */}

                <div className='section-chart'>
                    <div className='section-chart-card'>
                        <div className='section-chart-card1'>
                            <h4><i className="ri-community-line"></i>Merchant Join</h4>
                            <div className='section-subchart'>
                                <h5>3089</h5>
                                <h6>+ 29%</h6>
                            </div>
                            <img src={barchart} alt='' />
                        </div>
                        <div className='cards'>
                            <p><i className="ri-user-follow-fill"></i>User Register</p>
                            <h6>+13%</h6>
                        </div>
                        <div className='cards'>
                            <p><i class="ri-bubble-chart-line"></i>User Register</p>
                            <h6>+72%</h6>
                        </div>
                    </div>
                    <div className='section-chart-card2'>
                        <div>
                        <p><i className="ri-user-follow-fill"></i>User Summary</p>
                        </div>
                        <div className='section-time'>
                            <p>Week</p>
                            <p>Month</p>
                            <p>Year</p>
                        </div>

                        <img src={barchart1} alt='' />
                    </div>
                </div>

                <table className='section-table'>
                    <tr>
                        <th>Business name</th>
                        <th>Category</th>
                        <th>Progress</th>
                        <th>Rating</th>
                    </tr>
                    <tr>
                        <td>Summer Mini bars</td>
                        <td>Food&Beverage</td>
                        <td><img src={bar1} alt='' /> 90%</td>
                        <td><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-ellipsis-vertical"></i></td>
                    </tr>
                    <tr>
                        <td>Angkringan Mas Adit</td>
                        <td>Food&Beverage</td>
                        <td><img src={bar2} alt='' /> 40%</td>
                        <td><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-ellipsis-vertical"></i></td>
                    </tr>
                    <tr>
                        <td>Warung Mba Yanti</td>
                        <td>Food&Beverage</td>
                        <td><img src={bar3} alt='' /> 20%</td>
                        <td><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-ellipsis-vertical"></i></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Section;
