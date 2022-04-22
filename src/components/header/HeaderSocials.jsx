import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/otso-weckstr%C3%B6m/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/otsoweckstrom" target="_blank">
        <BsGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
