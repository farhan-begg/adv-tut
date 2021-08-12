import React from 'react'
import './SideNavbar.css'

import { links } from '../data'
const SideNavbar = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
  return (
    
    <div class="sidebar">
      <h3>Contents</h3>
      <div className='sidebar-nav-center'>
        {/* <img src={logo} alt='smooth scroll' /> */}
        <div>
          {links.map((link) => {
            return (
              <a href={link.url} key={link.id} onClick={handleClick}>
                {link.text}
              </a>
            )
          })}
        </div>
      </div>

    
        </div>

  )
}

export default SideNavbar
