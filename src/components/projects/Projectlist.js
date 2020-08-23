import React from 'react'
import Projectsummary from './Projectsummary'

const ProjectList = ({projects}) => {

  return (
    <div className="project-list section">  
     {
         projects && projects.map(project=>{
             return(
                 <Projectsummary project={project} key={project.id}/>
             )
         })
     }
    </div>
  )
}

export default ProjectList