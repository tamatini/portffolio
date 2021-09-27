import React from 'react';
import Image from './Content/Image';
import Text from './Content/Text';

const Projects = ({props}) => {
  return(
    <div className="container pt-5" id="projects">
      <div className="row text-start pb-4">
        <h1 className="text-white display-5"><span className="text-accent fw-bold text-uppercase">#projets récent;</span></h1>
        <p className="subtitle display-6">Récapitulatif de quelques uns de mes travaux, et des technologie que jai utiliser.</p>
      </div>
      <div className="row list-inline">
        {
          props.map((project, key) => {
            return (
              <div key={key} className="project-card col text-center m-2" data-aos='fade-up' data-aos-duration="2000">
                <Image image={project.image}/>
                <Text
                  title={project.title}
                  url={project.url}
                  subtitle={project.subtitle}
                  gh={project.gh}
                  detail={project.detail}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;