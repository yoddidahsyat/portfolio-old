import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/images/profile-lg.JPG'

const Home = () => {
  return (
    <div className='container'>
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="row align-items-center justify-content-center">
          <div className='col-md-5 text-end'>
            <img src={profile} alt='yoddi dahsyat' className='img-fluid w-50' />
          </div>
          <div className='col-md-5'>
            <h1>Hi!</h1>
            <h3>I'm Mohammad Yoddi Dahsyat,</h3>
            <h5>a Full Stack Developer.</h5>
            <div className="mt-3">
              <Link className='link-secondary me-3' to='/about'>About</Link>
              <Link className='link-secondary me-3' to='/projects'>Projects</Link>
              <Link className='link-secondary me-3' to='/contact'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home