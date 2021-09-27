import React from 'react';

const Navlink = ({name, url}) => {
  return(
    <li className="nav-item ">
      <a className="text-accent hover-no-bg text-decoration-none nav-link" href={url}>{name}</a>
    </li>
  )
}

export default Navlink;