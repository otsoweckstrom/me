import React, { useState } from 'react'
import './about.css'
/* import ME from '../../assets/slush-portrait3.jpg' */
import ME from '../../assets/slush-purple.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

const About = () => {
  const [style, setStyle] = useState({ color: 'transparent' })
  return (
    <section id="about">
      <h5>a little bit</h5>
      <h2 className="glow">About Me!</h2>
      <div className="container about__container">
        <div className="about__me">
          <div
            className="about__me-image"
            onMouseEnter={(e) => {
              setStyle({ color: 'var(--color-light)' })
            }}
            onMouseLeave={(e) => {
              setStyle({ color: 'transparent' })
            }}
          >
            <img src={ME} alt="About Image" />
          </div>
          <div>
            <h5 style={style}>a stand-up guy</h5>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Studying for Masters in Computer Science.</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Work</h5>
              <small>
                1+ year of work experience working in a consulting company.
              </small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>
                Multiple completed professional and amateur projects.
              </small>
            </article>
          </div>
          <div className="about__text">
            <h2>Hi!</h2>
            <br></br>
            <p>
              My name is
              <span className="name"> Otso Weckström. </span>
            </p>
            <br></br>
            <p>
              I'm a Computer Science student with a bachelor's degree studying
              for my masters in the Lappeenranta University of Technology.
            </p>

            <p>Alongside studying I am also working at Visma Consulting Oy.</p>
            <br></br>
            <p>
              I know that technology as a field has an endless amount of
              opportunities and things to learn I don't think I've yet found the
              one thing I want to be doing so my plan is to keep an open mind
              and learn as I go!
            </p>
          </div>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About
