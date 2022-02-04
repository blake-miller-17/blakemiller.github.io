import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import React, { useContext, useState } from "react"
import { ThemeContext } from "../../context"
import { FaCompass, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

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
                        <div className="contact-text">
                            <FaEnvelope style={{fontSize: '25px', paddingRight: '20px', paddingTop: '5px'}}/>
                            bgarrettm@gmail.com
                        </div>      
                        <div className="contact-text">
                            <FaCompass style={{fontSize: '25px', paddingRight: '20px'}}/>
                            East Lansing, Michigan
                        </div>                        
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>Interested in what you see?</b> Get in touch, lets talk about it
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Name' name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Subject' name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Email' name="user_email" />                        
                        <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && "Thanks for getting in contact, I'll get back to you shortly!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact