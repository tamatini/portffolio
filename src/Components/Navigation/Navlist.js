import React from 'react';
import { Menu } from '../../Data/Menu';
import Navlink from './Navlink';

const Navlist = () => {
  return <ul className="navbar-nav ms-auto">{
    Menu.map((list, key) => {
      return <Navlink key={key} name={list.name} url={list.url}/>
    })
  }</ul>;
};

export default Navlist;