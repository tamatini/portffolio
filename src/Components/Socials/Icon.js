import React from 'react';

const Icon = ({name, url, icon, short}) => {
  return (
      <a className="text-decoration-none social text-white" href={url} target="_blank" rel="noreferrer">
          <i className={`${icon}`}/> {name}: {short}
      </a>
  )
};

export default Icon;