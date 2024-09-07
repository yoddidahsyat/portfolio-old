import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='container'>
        <div className='row py-3'>
          <div className='col'>
            <p>2024 | Yoddi Dahsyat</p>
          </div>
          <div className='col-auto'>
            <a
              target='_blank'
              rel='noreferrer'
              className='me-3 align-items-start'
              href='mailto:yoddi.dahsyat@gmail.com'
            >
              <i className='bi bi-envelope link-dark'></i>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              className='me-3'
              href='https://wa.me/6285157667536'
            >
              <i className='bi bi-whatsapp link-dark'></i>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              className=''
              href='https://linkedin.com/in/yoddidahsyat'
            >
              <i className='bi bi-linkedin link-dark'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
