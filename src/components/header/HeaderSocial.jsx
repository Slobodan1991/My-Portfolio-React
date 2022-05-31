import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/slobodan-perisic-502301229/" target="_blank"><FaLinkedinIn/></a>
        <a href="https://github.com/Slobodan1991" target="_blank"><FiGithub/></a>
    </div>
  )
}

export default HeaderSocial