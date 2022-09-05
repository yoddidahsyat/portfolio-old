import React from 'react'
import { Button, Image } from 'react-bootstrap'
import profile from '../assets/images/profile-sm.jpg'
// import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='container'>
      <div className="row vh-100 align-items-center">
        <div className='col text-center'>
          <div className="col">
            <Image src={profile} alt='profile' width='200' height='200' roundedCircle style={{objectFit: 'cover'}} />
          </div>
          <h1 className='my-3'>About me</h1>
          <p>I am 24 years old, currently live in Purbalingga, Central Java, Indonesia. I am a full stack web developer with great problem solving skills and a good sense of design. I have more than 1 year of experience working as a fullstack and frontend developer.</p>
          <Button variant='dark' href='/CV%20-%20Mohammad%20Yoddi%20Dahsyat.pdf' target='_blank' >Download Resume</Button>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md">
          <h3>Work Experience</h3>
        </div>
        <div className="col">
          <div className="row">
            <div className='fw-bold'>uHoo Pte., Ltd.</div>
            <div>Web developer (frontend)</div>
            <div className='fst-italic'>Oct 2021 - Aug 2022</div>
            <li>Maintain frontend web development for premium and partner dashboard to show visualized data using ReactJs.</li>
          </div>
          <div className="row mt-4">
            <div className='fw-bold'>PT. Talenta Indonesia Raya</div>
            <div>Full stack developer</div>
            <div className='fst-italic'>Feb - Aug 2021</div>
            <li>Develop and maintain online psycho-test website application and server to be used by thousands of users concurrently using PHP, mySQL, jQuery, and Google Cloud Platform.</li>
            <li>Create new assessment kits and modules to be used by clients.</li>
          </div>
          <div className="row mt-4">
            <div className='fw-bold'>The Ministry of Communication and Information of Indonesia (Kemkominfo)</div>
            <div>Internship</div>
            <div className='fst-italic'>Mar - May 2020</div>
            <li>Create a web app for employee management system using PHP and mySQL</li>
          </div>
        </div>
      </div>
      <div className="row py-4">
        <div className="row">
          <div className="col-md-2">
            <h3>Education</h3>
          </div>
          <div className="col-4 text-end">
            <h5>Formal</h5>
          </div>
          <div className="col">
            <div className='fw-bold'>Jenderal Soedirman University</div>
            <div>Electrical Engineering</div>
            <div className='fst-italic'>2016 - Present</div>
            <li>Focus on Information System and Internet of Things</li>
            <li>Passed the funding phase of Student Creativity Program (PKM) in IoT field</li>
            <li>Willing to graduate in early 2023</li>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2" />
          <div className="col-4 text-end">
            <h5 className="text-break">Training/Course</h5>
          </div>
          <div className="col">
            <div className="row">
              <div className='fw-bold'>Dumbways.id</div>
              <div>Full Stack Developer bootcamp</div>
              <div className='fst-italic'>Dec 2020 - Jan 2021</div>
              <li>Learn about fullstack programming using NodeJs, ReactJs, and React Native</li>
              <li>Build two web apps and one mobile app within a month</li>
            </div>
            <div className="row mt-3">
              <div className='fw-bold'>SkillAcademy.com</div>
              <div>Basic Foundation for Data Science</div>
              <div className='fst-italic'>Oct 2020</div>
              <li>Learn basic data processing with python and mysql</li>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4">
        <div className="row">
          <div className="col-md">
            <h3>Organization</h3>
          </div>
          <div className="col">
            <div className="row">
              <div className='fw-bold'>LayakBahagia.id</div>
              <div>Media and Publication staff</div>
              <div className='fst-italic'>Dec 2020</div>
            </div>
            <div className="row mt-3">
              <div className='fw-bold'>Alliance of Electrical Engineering Laboratory</div>
              <div>Lab Assistance and Coordinator</div>
              <div className='fst-italic'>Feb - Jul 2020</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-6">
          <h3>Skills</h3>
        </div>
        <div className="col">
          <p className='fw-bold'>Coding Languages:</p>
          <ul>
            <li>HTML</li>
            <li>CSS / SCSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="col">
          <p className='fw-bold'>Frameworks/Libraries:</p>
          <ul>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>jQuery</li>
            <li>AJAX</li>
            <li>CodeIgniter</li>
            <li>Bootstrap</li>
            <li>React Native</li>
          </ul>
        </div>
        <div className="col">
          <p className='fw-bold'>Others:</p>
          <ul>
            <li>Git</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default About