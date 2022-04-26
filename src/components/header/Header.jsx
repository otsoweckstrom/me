import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Portrait from '../../assets/Slush_portrait.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="text-dark">Otso Weckström</h1>
        <h5 className="text-light">Software Engineering Student</h5>
        <h5 className="text-light">Developer / Consultant</h5>

        <CTA />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="me">
          <img src={Portrait} alt="me" />
        </div>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header
