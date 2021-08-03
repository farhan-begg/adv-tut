import React from 'react'
import Home from './Home'

import SideNavbar from './SideNavbar'

const Pages = () => {
    return (
       
        <main id='home'>
             <SideNavbar />
        <section className='home'> <Home /></section>
          
      
        <section className='about' id='about'>
          <h1>about</h1>
        </section>
        <section className='projects' id='projects'>
          <h1>projects</h1>
        </section>
        <section className='contact' id='contact'>
          <h1>contact</h1>
        </section>
        <section className='rest'></section>
      </main>
    )
}

export default Pages
