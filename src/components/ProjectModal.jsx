import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const ProjectModal = ({show, close, project}) => {
    return (
        <Modal show={show} onHide={close} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title>Waysbucks</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    {project.images.map(img =>
                        <div className='col-md-6' key={img}>
                            <img
                                src={img}
                                className='img-fluid my-3 border'
                                alt={img.slice(8)}
                            />
                        </div>)
                    }
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5>Description</h5>
                        {project.description}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5>Stack used</h5>
                        <p>{project.stack.join(', ')}.</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={close}>
                    Close
                </Button>
                <Button
                    variant='dark'
                    href={project.repository}
                    target='_blank'
                >
                    View Repository
                </Button>
                <Button
                    variant='dark'
                    href={project.link}
                    target='_blank'
                >
                    View Site
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal