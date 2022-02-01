import './contact.css'
import Phone from '../../image/pic02.jpg'
import Email from '../../image/pic03.jpg'
import Address from '../../image/pic04.jpg'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import React, { useEffect, useState } from "react";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();

        emailjs.sendForm('service_2oifiyn', 'template_isaydih', formRef.current, 'user_GXpm53NDJuBuMSDe3nTiz')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Lets talk!</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img 
                            src={Phone} 
                            alt="" 
                            className="contact-icon" 
                            />
                            +1 (970) 371-8393
                        </div>
                        <div className="contact-info-item">
                        <img 
                            src={Email} 
                            alt="" 
                            className="contact-icon" 
                            />
                            bgarrettm@gmail.com
                        </div>
                        <div className="contact-info-item">
                        <img 
                            src={Address}
                            alt="" 
                            className="contact-icon" 
                            />
                            1234 SUCKIT
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>What's your story?</b> Get in touch, lets talk about it
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />                        
                        <textarea rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact