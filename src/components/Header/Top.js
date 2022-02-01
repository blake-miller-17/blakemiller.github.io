import React from 'react';

const Top = () => (
    <div className="top">		
        <div id="logo">
            <span className="image avatar48"><img src="public\template\images\avatar.jpg" alt="avatar" /></span>
            <h1 id="title">Blake Miller</h1>
            <p>Software Engineer</p>
        </div>

        <nav id="nav">
            <ul>
                <li><a href="" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
                <li><a href="" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
                <li><a href="" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
                <li><a href="" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
            </ul>
        </nav>
    </div>
)
export default Top;