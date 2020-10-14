import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Navbar, Nav
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import './header.css';
import { logout } from '../../actions/userActions';

/* eslint-disable-next-line */
export interface HeaderProps { }

export const Header = (props: HeaderProps) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector(state => state.userSignin)
  return (
    <div className='mb-4'>
      <Navbar bg="info" variant="dark" expand="lg">
        <Navbar.Brand href="/">SingsysLMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='right' id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className='link nav-link' to="/">Home</Link>
            {
              !userInfo ?
                <>
                  <Link className='link nav-link' to="/login">Login</Link>
                  <Link className='link nav-link' to="/registration">Registration</Link>
                </>
                :
                userInfo.isAdmin ?
                  <>
                    <Link className='link nav-link' to="#">Manage Book</Link>
                    <Link className='link nav-link' to="#">Manage Users</Link>
                    <h6>Welcome {userInfo.name}</h6>
                    <Link className='link nav-link' to="#">Logout</Link>
                  </>
                  :
                  <>
                    <Link className='link nav-link' to="#">User Profile</Link>
                    <Link className='link nav-link' to="#">Issue Book</Link>
                    <h6>Welcome {userInfo.name}</h6>
                    <a className='link nav-link' href='/api/logout'>Logout</a>
                  </>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
};

export default Header;
