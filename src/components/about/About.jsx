import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import CTA from './CTA'
import { MdComputer } from 'react-icons/md'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiNetworkChart } from 'react-icons/bi'

const About = () => {
  return (
   <section id='about'>
     <h5>Get to Know</h5>
     <h2>About me</h2>

     <div className='container about-container'>
       <div className='cards'>

          <article className="card">
              <MdComputer className='card-icon' />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
          </article>

          <article className="card">
              <AiOutlineFundProjectionScreen className='card-icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
          </article>

          <article className="card">
              <BiNetworkChart className='card-icon'/>
              <h5>Skills</h5>
              <small>JavaScript, HTML, CSS...</small>
          </article>
       </div>
          <div className="content">
            <div className="about-img">
              <img src={ME} alt="" />
            </div>
            <small>
            Hello everyone, my name is Slobodan. I have one year of experience with frontend development. My favorite tools are Visual Studio Code, React, JavaScript, CSS, HTML, Bootstrap. I love programming and I have a desire for further improvement!
            </small>
            <CTA />
          </div>
        </div>
   </section>
  )
}

export default About


/*   <div className="about-content">
           <div className="cards">
             <article className='card'>
               <MdComputer className='about-icon'/>
               <h5>Experience</h5>
               <small>1+ Years Working</small>
             </article>

             <article className='card'>
               <MdComputer className='about-icon'/>
               <h5>Project</h5>
               <small>10+ Completed</small>
             </article>
             
             <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam cupiditate maiores doloribus veniam alias eum cumque dolorem mollitia fuga molestias illum tempore, facilis, ducimus quae aspernatur,
                fugiat illo laudantium id.
               Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit. Officiis ab in dolore deleniti omnis accusantium odio repellendus sit dolorum laboriosam eius facilis dolores blanditiis, saepe animi neque cupiditate totam adipisci!
             </p>
              <CTA></CTA>
           </div>
         </div>
              <div className="about-me">
         <div className="about-me-img">
           <img src={ME} alt="bg" />
         </div>
        </div>*/