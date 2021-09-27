import React from 'react';
import Icon from './Icon';

const Social = ({props}) => {
  return(
    <div className="container my-5" id="social">
      <div className="row">
        <h1 className="subtitle display-5">#Passer</h1>
        <p className="text-accent display-5">Me dire salut!;</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ul className="pt-4">
            {
              props.map(social => {
                const { icon, name, short, url} = social;
                return <li><Icon icon={icon} name={name} short={short} url={url} /></li>;
              })
            }
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <h1 className="text-accent display-5">Envi de travailler ensemble?</h1>
          <a className="text-decoration-none text-white social" href="mailto:tamatini@hotmail.fr">tamatini@hotmail.fr</a>
        </div>
      </div>
    </div>
  );
};

export default Social;