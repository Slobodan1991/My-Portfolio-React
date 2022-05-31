import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { RiFileUserFill } from 'react-icons/ri'
import { MdLibraryBooks } from 'react-icons/md'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const  [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome></FaHome></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><RiFileUserFill></RiFileUserFill></a>
      <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><MdLibraryBooks></MdLibraryBooks></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><AiFillMessage></AiFillMessage></a>
    </nav>
  )
}

export default Nav