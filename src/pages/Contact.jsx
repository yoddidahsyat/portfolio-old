import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <div className="row vh-100 align-items-center">
        <div className="row align-items-center">
          <div className="col-md">
            <h1>Contact</h1>
            <p>Looking forward to hearing from you</p>
          </div>
          <div className="col-md">
            <div className="row text-center">
              <div className="col">
                <a target='_blank' href='mailto:yoddi.dahsyat@gmail.com'><i className="bi bi-envelope link-dark" style={{ fontSize: 80 }}></i></a>
                <div className='text-dark'>email</div>
              </div>
              <div className="col">
                <a target='_blank' href='https://wa.me/6285157667536'><i className="bi bi-whatsapp link-dark" style={{ fontSize: 80 }}></i></a>
                <div className='text-dark'>whatsapp</div>
              </div>
              <div className="col">
                <a target='_blank' href='https://linkedin.com/in/yoddidahsyat'><i className="bi bi-linkedin link-dark" style={{ fontSize: 80 }}></i></a>
                <div className='text-dark'>linkedin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact