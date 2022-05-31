import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>SP - Frontend Developer</a>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://linkedin.com"><FaLinkedinIn/></a>
      </div>

      <div className="copyright">
        <small>&copy; SP-Programming. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer