import React, { useState } from 'react'
import waysbucks from '../assets/images/waysbucks-home.png'
import waysbucksMenu from '../assets/images/waysbucks-menu.png'
import { Modal, Button } from 'react-bootstrap'

const Projects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container'>
      <div className="row vh-100 align-items-center">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h1 className='text-center'>Selected Projects</h1>
          </div>
          <div className="col">
            <div className="card py-3">
              <img src={waysbucks} className="card-img-top" alt="waysbucks" />
              <div className="card-body">
                <h5 className="card-title">Waysbucks</h5>
                <div className="text-end">
                  <Button variant="dark" onClick={handleShow} className='ms-auto'>View</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>Waysbucks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <img src={waysbucks} className="img-fluid my-3 border" alt="waysbucks" />
            </div>
            <div className="col">
              <img src={waysbucksMenu} className="img-fluid my-3 border" alt="waysbucks" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Description</h5>
              <p>Waysbucks is an online store website application for an imaginary coffee shop. Buyers can make an account, choose some menus and combined toppings, and upload proof of payment. Meanwhile admin can monitor and change the status of transactions. Admin can also add, edit, or delete products and toppings.</p>
              This is the process of a complete transaction in WaysBucks:
              <ol>
                <li>user signup/login</li>
                <li>choose one or more products with or without toppings</li>
                <li>fill in transaction detail</li>
                <li>make a payment (this is imaginary)</li>
                <li>upload payment proof (use any photo)</li>
                <li>admin checks the payment proof, and change the transaction status into On Delivery (if payment is valid) or Cancelled (if payment is invalid)</li>
                <li>user wait and change the status when the coffee is delivered</li>
                <li>transaction completed.</li>
              </ol>
              To make a transaction you can login or register a new account as user (no valid email needed), and you can use this account to login as admin:
              <ul>
                <li>Email: admin@waysbucks.com</li>
                <li>Password: waysbucks</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Stack used</h5>
              <p>ReactJs, NodeJs, ExpressJs, PostgreSQL, React-Bootstrap.</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="dark" href='https://github.com/yoddidahsyat/DWF19PFK3_WaysBucks' target='_blank'>View Repository</Button>
          <Button variant="dark" href='https://yoddi-waysbucks.netlify.app' target='_blank'>View Site</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Projects