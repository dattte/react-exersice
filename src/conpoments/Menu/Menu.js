import './Menu.css';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

class Menu extends React.Component {
  render() {
    return (
      <div className="wrapper-menu">
        <div className="home-icon">
          <FaHome />
        </div>
        <div className="home-child">
          <FaFlask />
          <p>Projects</p>
        </div>
        <div className="projects-child">
          <FaAngleDoubleRight />
          <p>Breadcrumb</p>
        </div>
        <div className="breadcrumb-child">
          <FaRocket />
          <p>Getting Started</p>
        </div>
        <div className="gettingstarted-child">
          <FaArrowDown />
          <p>Download</p>
        </div>
      </div>
    );
  }
}

export default Menu;
