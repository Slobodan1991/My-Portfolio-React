import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useState } from 'react'

 const App = () => {
  const [ darkMode, setDarkMode ] = useState(true);

  return (
    <><div className={darkMode ? 'light-mode' : 'dark-mode'}>
      <div className="dark-mode-container">

        <span style={{ color: darkMode ? 'yellow' : 'gray' }}>☀</span>
        <div className="switch-checkbox">
          <label className='switch'>
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className='slider round'></span>
          </label>
        </div>
        <span style={{ color: darkMode ? 'black' : 'gray' }}>☾</span>
      </div>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Contact />
    <Footer />
    </div>
    </>
      
  
  )}

export default App