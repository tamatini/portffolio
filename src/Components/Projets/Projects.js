import React from 'react';
import Image from './Content/Image';
import Text from './Content/Text';

const Projects = ({props}) => {
  return(
    <div className="container my-5" id="projects">
      <div className="row text-start my-5 pb-4">
        <h1 className="text-white mt-5"><span className="text-accent fw-bold text-uppercase">#projets récent;</span></h1>
        <h2 className="subtitle">Quelques uns de mes travaux, et des technologie que jai utiliser.</h2>
      </div>
      <div className="row list-inline">
        {
          props.map((project, key) => {
            return (
              <div key={key} className="project-card col text-center m-2">
                <Image image={project.image}/>
                <Text
                  title={project.title}
                  url={project.url}
                  subtitle={project.subtitle}
                  gh={project.gh}
                  detail={project.detail}
                />
                <img src="" alt=""/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;
