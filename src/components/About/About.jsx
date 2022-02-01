// src/components/About.js
import React from 'react';
import './About.css'
import ph from '../../image/pic03.jpg'
import award from '../../image/pic07.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={ph} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    It is a long established fact that a reader will be able to not see
                    all readable content.
                </p>
                <p className="about-descr">
                    This is a very long sentence but also its just copy pasted. This is a very long sentence but also its just copy pasted.
                    This is a very long sentence but also its just copy pasted. This is a very long sentence but also its just copy pasted.
                    This is a very long sentence but also its just copy pasted.
                </p>
                <div className="about-award">
                    <img src={award} alt="" className='about-award-img'/>
                    <div className="about-award-texts">
                        <h4 className="about-award-title">International Desgin</h4>
                        <p className="about-award-desc">
                            Lorem de ipsum all arahd to neiteh scascaot
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
