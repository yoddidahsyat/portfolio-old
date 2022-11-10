import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../data/projects";

const Projects = () => {
	const [showProject, setShowProject] = useState(false)
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState(undefined)
    
    useEffect(()=>{
        setProjects(projectsData)
    }, [])

	const handleClose = () =>{
        setProject(undefined)
        setShowProject(false)
    }
	const handleShow = (project) => {
        setProject(project)
        setShowProject(true)
    }
    // console.log(projects)
	return (
		<div className='container pt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <h1 className='text-center'>Selected Projects</h1>
                </div>
            </div>
            <div className='row'>
                {projects && projects.map((project) => (
                    <div className='col-md-6 my-3' key={project.id}>
                        <div className='card h-100 my-3'>
                            <img
                                src={project.images[0]}
                                className='card-img-top'
                                alt='waysbucks'
                            />
                            <div className='m-3 mt-auto'>
                                <h5 className='card-title'>
                                    {project.title}
                                </h5>
                                <div className='text-end'>
                                    <Button
                                        variant='dark'
                                        onClick={() => handleShow(project)}
                                        className='ms-auto'
                                    >
                                        View
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <Button variant='dark' href='/Portfolio%20-%20Mohammad%20Yoddi%20Dahsyat.pdf' target='_blank' >See more in PDF</Button>
                </div>
            </div>
			{ showProject && <ProjectModal show={showProject} close={handleClose} project={project} /> }
		</div>
	);
};

export default Projects;
