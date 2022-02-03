// src/components/About.js
import React from 'react';
import './About.css'
import hockey from '../../image/BlakeIce.jpeg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={hockey} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                   A computer science major graduating in May of 2022.
                </p>
                <p className="about-descr">
                   I split my schooling into two parts, spending the first half of it at the
                   University of California - Santa Cruz and the latter part at Michigan State University. 
                   A mix of computer science and game developement currriculum have made me want to pursue
                   a career in such fields.
                </p>
            </div>
        </div>
                /* This is the place to show off an award
                ...if I had one 
                <div className="about-award">
                    <img src={award} alt="" className='about-award-img'/>
                    <div className="about-award-texts">
                        <h4 className="about-award-title">International Desgin</h4>
                        <p className="about-award-desc">
                            Lorem de ipsum all arahd to neiteh scascaot
                        </p>
                    </div>
                </div>
            </div> */
    )
}

export default About
