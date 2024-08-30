import React from 'react'
import './aside.css'
import images from '../images/images.png'
import bar4 from '../images/bar4.png'
import linegraph from '../images/linegraph.png'

function Aside() {
    return (
        <>
            <div className='aside'>

                <div className='aside1'>
                    <p>Top merchant</p>
                    <p className='one'>List Merchant</p>
                </div>

                <div className='aside2'>
                    <img src={images} alt='' />
                    <div className='two'>
                        <div>Summer Mini bars</div>
                        <p>Outlet Tutorial <span>(24) <i class="fa-solid fa-star"></i> 5 </span></p>
                    </div>
                    <i class="ri-verified-badge-fill"></i>
                </div>

                <div className='aside3'>
                    <img src={bar4} alt='' />
                </div>

                <div className='aside4'>
                    <div className='three'>
                        <div><i class="fa-solid fa-circle"></i>$ 356.000, 00</div>
                        <p>Net Profit Per Month</p>
                    </div>
                    <div className='four'>
                        <div><i class="fa-solid fa-circle"></i>$ 216.000, 00</div>
                        <p>Gross Profit Per Month</p>
                    </div>
                </div>

                <div className='aside5'>
                    <div>Performance</div>
                    <p>Performance sandar mancap</p>
                </div>

                <div className='aside6'>
                    <img src={linegraph} alt='' />
                </div>

                <div className='aside1'>
                    <p>Popular merchant</p>
                    <p className='one'>List Merchant</p>
                </div>

                <div className='aside7'>
                    <div className='aside2'>
                        <img src={images} alt='' />
                        <div className='two'>
                            <div>Angkringan Mas Adit</div>
                            <p>Outlet Tutorial <span>(22) <i class="fa-solid fa-star"></i> 5 </span></p>
                        </div>
                        <i class="ri-verified-badge-fill"></i>
                    </div>

                    <div className='aside2'>
                        <img src={images} alt='' />
                        <div className='two'>
                            <div>Warung Mba Yanti</div>
                            <p>Outlet Tutorial <span>(14) <i class="fa-solid fa-star"></i> 4.9 </span></p>
                        </div>
                        <i class="ri-verified-badge-fill"></i>
                    </div>

                    <div className='aside2'>
                        <img src={images} alt='' />
                        <div className='two'>
                            <div>Kapau Anak Sultan</div>
                            <p>Outlet Tutorial <span>(14) <i class="fa-solid fa-star"></i> 4.9 </span></p>
                        </div>
                        <i class="ri-verified-badge-fill"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside;