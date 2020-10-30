import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Navbar, Nav
} from 'react-bootstrap';
import './header.css';

/* eslint-disable-next-line */
export interface HeaderProps { }

export const Header = ({ user }) => {

  return (
    <div className='mb-4'>
      <Navbar bg="info" variant="dark" expand="lg">
        <Navbar.Brand href="/">SingsysLMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='right' id="basic-navbar-nav">
          <Nav className="ml-auto">
            {
              !user ?
                <>
                  <Link className='link nav-link' to="/login">Login</Link>
                  <Link className='link nav-link' to="/registration">Registration</Link>
                </>
                :
                user.isAdmin ?
                  <>
                    <Link className='link nav-link' to="/admin/manage-book">Manage Book</Link>

                    <Link className='link nav-link' to="/admin/issue-book">Issue Book</Link>
                    <h6>Welcome {user.name}</h6>
                    <a className='link nav-link' href="/api/logout">Logout</a>
                  </>
                  :
                  <>
                    <Link className='link nav-link' to="/user/user-profile">User Profile</Link>
                    <Link className='link nav-link' to="/user/issue-book">Issue Book</Link>
                    <h6>Welcome {user.name}</h6>
                    <a className='link nav-link' href='/api/logout'>Logout</a>
                  </>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
};

export default Header;
