import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jkm7l12', 'template_kd0d093', form.current, 'gKEp7EvHFLP5NZmPC')

    e.target.reset()
   
  };

  return (
    <section id='contact'>
      <h5>Ger in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact-container">
        <div className="contact-options">
            <article className='option'>
              <HiOutlineMail className='option-icon'/>
              <h4>Email</h4>
              <h5>slobodanperisic91@gmail.com</h5>
              <a href="mailto:slobodanperisic91@gmail.com">Send a message</a>
            </article>

            <article className='option'>
              <BsWhatsapp className='option-icon'/>
              <h4>What's up</h4>
              <h5>+381 60 324 99 91</h5>
              <a href="https://api.whatsapp.com/send?phone=+381603249991" target="_blank">Send a message</a>
            </article>

            <article className='option'>
              <BsFillTelephoneFill className='option-icon' />
              <h4>Phone Number</h4>
              <h5>+381 60 324 99 91</h5>
              <a href="tel:+381603249991">CALL</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <h1>Send Your Message</h1>
            <div className='line'></div>
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="10" placeholder='Your Message'></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
