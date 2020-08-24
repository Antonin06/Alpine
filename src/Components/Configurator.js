import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Navbar } from 'react-bootstrap'

const Configurator = () => (

  <Navbar bg="dark">
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Navbar>

)

export default Configurator;
