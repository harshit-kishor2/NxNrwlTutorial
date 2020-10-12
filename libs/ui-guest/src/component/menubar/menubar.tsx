import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './menubar.css';
import {
  Navbar, Nav
} from 'react-bootstrap';

export interface MenubarProps { }

export const Menubar = (props: MenubarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (

    <div className='mb-4'>
      <Navbar bg="info" variant="dark" expand="lg">
        <Navbar.Brand href="/">SingsysLMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='right' id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className='link nav-link' to="/">Home</Link>
            <Link className='link nav-link' to="/login">Login</Link>
            <Link className='link nav-link' to="/registration">Registration</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
};

export default Menubar;
