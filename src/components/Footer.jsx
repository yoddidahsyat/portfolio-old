import React from 'react'

const Footer = () => {
    return (
        <div className='container'>
            <div className="row py-3">
                <hr />
                <div className="col">
                    <p>Yoddi Dahsyat</p>
                </div>
                <div className="col-4 text-end">
                    {/* <div className="row text-end"> */}
                        {/* <div className="col"> */}
                            <a target='_blank' className='me-3 align-items-start' href='mailto:yoddi.dahsyat@gmail.com'><i className="bi bi-envelope link-dark" ></i></a>
                        {/* </div> */}
                        {/* <div className="col"> */}
                            <a target='_blank' className='me-3' href='https://wa.me/6285157667536'><i className="bi bi-whatsapp link-dark"></i></a>
                        {/* </div> */}
                        {/* <div className="col"> */}
                            <a target='_blank' className='' href='https://linkedin.com/in/yoddidahsyat'><i className="bi bi-linkedin link-dark"></i></a>
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer