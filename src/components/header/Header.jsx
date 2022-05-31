import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className=" container header_container">
        <h1>Hello I'm</h1>
        <h1>Slobodan Perišić</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <div className="me">
          <img src={ME} alt="me" />
        <a href="#contact" className='scroll-down'><BsChevronDoubleDown /></a>
        </div>
        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header