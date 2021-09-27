import React from 'react';

const Text = ({title, subtitle, url, gh, detail}) => {
  return(
    <div className="p-4 text-center">
      <h3 className="text-accent">{title}</h3>
      <p className="custom-link subtitle p-0 m-0">{subtitle}</p>
      <p className="text-detail pb-4 project-detail mx-auto">{detail}</p>
      <a className="text-darker hover-no-bg bg-accent p-3 mx-1 rounded-1" href={url} target="_blank" rel="noreferrer">
        <img className="link-icon" src={'./img/projects/loupe.svg'} alt="loupe"/>
      </a>
      <a className={gh ?
          "text-darker hover-no-bg bg-accent p-3 mx-1 rounded-1" :
          "bg-light text-darker disabled p-3 mx-1 rounded-1"}
         href={gh ? gh : ''}>
        <img className="link-icon" src={'./img/projects/logo-github.svg'} alt="github"/>
      </a>
    </div>
  )
}

export default Text;