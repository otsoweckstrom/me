import React, { useState } from 'react'
import './experience.css'

const Experience = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <section id="experience">
            <h5>So what can I do?</h5>
            <h2>Skills</h2>
            <div className="experience__container">
                <div className="experience__column">
                    <h1 className="experience__title">Languages</h1>
                    <div className="list__container">
                        <ul className="a">
                            <li>React</li>
                            <li>React Native</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>C</li>
                        </ul>
                        <ul className="b">
                            <li>Good</li>
                            <li>Good</li>
                            <li>Good</li>
                            <li>Good</li>
                            <li>Decent</li>
                            <li>Decent</li>
                            <li>Few Unity Projects</li>
                            <li>Basics</li>
                        </ul>
                    </div>
                </div>
                <div className="experience__column">
                    <h1 className="experience__title">Technologies</h1>
                    <div className="list__container">
                        <ul className="a">
                            <li>Node.js</li>
                            <li>s</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>C</li>
                        </ul>
                        <ul className="b">
                            <li>Good</li>
                            <li>Good</li>
                            <li>Good</li>
                            <li>Good</li>
                            <li>Decent</li>
                            <li>Decent</li>
                            <li>Few Unity Projects</li>
                            <li>Basics</li>
                        </ul>
                    </div>
                </div>
                <div className="experience__column">
                    <h1 className="experience__title">Other</h1>
                    <div className="list__container">
                        <ul className="a">
                            <li>Github</li>
                            <li>s</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>C</li>
                        </ul>
                        <ul className="b">
                            <li className="good">Good</li>
                            <li>Good</li>
                            <li>Good</li>
                            <li>Good</li>
                            <li>Decent</li>
                            <li>Decent</li>
                            <li>Few Unity Projects</li>
                            <li>Basics</li>
                        </ul>
                    </div>
                </div>
                <div className="experience__column">
                    <h1 className="experience__title">Gaming</h1>
                    <div className="list__container">
                        <ul className="a">
                            <li>League Of Legends</li>
                            <li>CS:GO</li>
                            <li>Hearthstone</li>
                            <li>Clash Royale</li>
                        </ul>
                        <ul className="b">
                            <li>Diamond</li>
                            <li>Global Elite</li>
                            <li>Legend</li>
                            <li>Legendary Arena</li>
                        </ul>
                    </div>
                    <p className="experience__bottom">
                        Yeah I'm a bit of a gamer 😎
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Experience
