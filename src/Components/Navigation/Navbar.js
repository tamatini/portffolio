import React from 'react';
import Navlist from "./Navlist";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-darker px-5">
      <a href="#top" className="navbar-brand text-accent fw-bold hover-no-bg custom-link">
        <img src={'./img/logo.png'} className="logo" alt="logo"/>
        TAMATINI.IO
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-accent">
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Navlist />
      </div>
    </nav>
  )
}

export default Navbar;