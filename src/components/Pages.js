import React from 'react'
import Accordion from './Accordion'
import Home from './Home'

import SideNavbar from './SideNavbar'
import StepOne from './StepOne'
import StepTwo from './StepTwo'

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
          <Accordion />
        </section>
        <section className='projects' id='projects'>
          <h1><StepTwo /></h1>
        </section>
        <section className='contact' id='contact'>
          <h1>contact</h1>
        </section>
        <section className='contact' id='step4'>
          <h1>Step 4</h1>
        </section>
        <section className='step5' id='step5'>
          <h1>Step 5</h1>
        </section>
        <section className='step6' id='step6'>
          <h1>Step 6</h1>
        </section>
        <section className='step7' id='step7'>
          <h1>Step 7</h1>
        </section>
        <section className='step8' id='step8'>
          <h1>Step 8</h1>
        </section>
        <section className='step9' id='step9'>
          <h1>Step 9</h1>
        </section>
        <section className='step10' id='step10'>
          <h1>Step 10</h1>
        </section> <section className='contact' id='contact'>
          <h1>Step 11</h1>
        </section>

        <section className='rest'></section>
        </div>
      </main>
      </div>
    )
}

export default Pages
