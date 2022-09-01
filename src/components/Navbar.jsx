import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import profile from '../assets/images/profile-sm.jpg'
const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light')
  window.onscroll = () => {
    setNavbarClass((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) ? 'navbar-dark bg-dark' : 'navbar-light')
  }
  
  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-3 ${navbarClass}`}>
        <div className="container">
          <NavLink to={'/'} className='navbar-brand'>
            <Image src={profile} alt='profile' width='50' height='50' roundedCircle style={{objectFit: 'cover'}} />
            <span className='ms-3'>Yoddi Dahsyat</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarToggler'>
            <div className="navbar-nav ms-auto">
              <NavLink to={'/about'} className='nav-link me-5'>About</NavLink>
              <NavLink to={'/projects'} className='nav-link me-5'>Projects</NavLink>
              <NavLink to={'/contact'} className='nav-link'>Contact</NavLink>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar