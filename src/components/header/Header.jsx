import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
/* import Portrait from '../../assets/slush-purple2.jpg' */
import Portrait from '../../assets/slush-portrait3.jpg'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5 className="text-light">Hello I'm</h5>
                <h1 className="text-dark">Otso Weckström</h1>
                <h5 className="text-light">Software Engineering Student</h5>
                <h5 className="text-light">Developer / Consultant</h5>
        

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
                <div className="me">
                    <img src={Portrait} alt="me" />
                </div>
                <CTA />
                <HeaderSocials />
            </div>
        </header>
    )
}

export default Header
