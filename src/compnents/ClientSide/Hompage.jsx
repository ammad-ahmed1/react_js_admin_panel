import React from 'react'
import '../ClientSide/StyleHomePage.css';
//import MainImg from '../ClientSide/images/Homepage imgs/MainImg.jpg';
import MainImg from '../ClientSide/images/Homepage imgs/FirstImage.avif';
import MenJacket1 from '../ClientSide/images/Homepage imgs/MenJacket1.webp';
import MenJacket2 from '../ClientSide/images/Homepage imgs/MenJacket2.webp';
import WomenJacket1 from '../ClientSide/images/Homepage imgs/WomenJacket1.webp';
import WomenSweater2 from '../ClientSide/images/Homepage imgs/WomenSweater2.webp';
const Hompage = () => {
    return (
        <div className='all'>
        <div className='hero-img'></div>
        <div className="wrapper" id=''>
            <header>
                <a href="#" className='logo'>Cloth<span>Brand</span></a>

                <nav>
                    <ul className='nav-ul'>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        {/* <li><a href="#">Search</a></li>
                        <li><a href="#">Signup</a></li>
                        <li><a href="#">Cart</a></li> */}

                    </ul>
                </nav>
            </header>
            <section className='hero'>
                <h1>Regain your confidence with new styles</h1>
            </section>
            {/* <div className="hero-img">
                <img src={MainImg} alt='main first img' className='hero-img' />
            </div> */}
            <section className='more-info'>
                <div className="feature">
                    <div className="content">
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                    </div>
                    <img src={MenJacket1} alt='men jacket 1.webp' />
                </div>

                <div className="feature-left">
                    <div className="content">
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                    </div>
                    <img src={MenJacket2} alt='men jacket 2.webp' />
                </div>

                <div className="feature">
                    <div className="content">
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                    </div>
                    <img src={WomenJacket1} alt='Women Jacket 1.webp' />
                </div>

                <div className="feature-left">
                    <div className="content">
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                        <p className="title">CONTRAST POLYESTER PADDING JACKET</p>
                    </div>
                    <img src={WomenSweater2} alt='Women Sweater2.webp' />
                </div>
            </section>

        </div>
        </div>
    )
}

export default Hompage