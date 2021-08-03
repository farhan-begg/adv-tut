import React from 'react'
import Home from './Home'

import SideNavbar from './SideNavbar'
import StepOne from './StepOne'

const Pages = () => {
    return (
       <div>
         <SideNavbar />

        <main id='home'>
        <div class="body-text">
        <section className='home'> 
          <Home />
        </section>
        <section className='about' id='about'>
          <StepOne />
        </section>
        <section className='projects' id='projects'>
          <h1>projects</h1>
        </section>
        <section className='contact' id='contact'>
          <h1>contact</h1>
        </section>
        <section className='rest'></section>
        </div>
      </main>
      </div>
    )
}

export default Pages
