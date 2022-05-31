import React from 'react'
import './experience.css'
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3 } from 'react-icons/si'
import { BsBootstrapFill } from 'react-icons/bs'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FaAngular } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { BsWordpress } from 'react-icons/bs'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { SiJasmine } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiMicrosoftoffice } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
            <article className='details'>
              <ImHtmlFive className='icon-details'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='details'>
              <SiCss3 className='icon-details'/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='details'>
              <DiJavascript1 className='icon-details'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='details'>
              <BsBootstrapFill className='icon-details'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='details'>
              <FaReact className='icon-details'/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='details'>
              <FaReact className='icon-details'/>
              <h4>React Native</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='details'>
              <FaAngular className='icon-details'/>
              <h4>Angular</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='details'>
              <FaNodeJs className='icon-details'/>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            </div>       
        </div>
        <div className="other">
        <h3>Other</h3>

          <div className="experience-content">
         
            <article className='details'>
              <BsWordpress className='icon-details'/>
              <h4>WordPress</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='details'>
              <AiOutlineConsoleSql className='icon-details'/>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='details'>
              <SiJasmine className='icon-details'/>
              <h4>Jasmine</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='details'>
              <SiAdobeillustrator className='icon-details'/>
              <h4>Adobe Illustrator</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='details'>
              <SiAdobephotoshop className='icon-details'/>
              <h4>Adobe Photoshop</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='details'>
              <SiMicrosoftoffice className='icon-details'/>
              <h4>MS Office</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience