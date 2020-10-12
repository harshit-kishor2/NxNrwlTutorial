import React, { useEffect, useState } from 'react';
import './home-page.css';
/* eslint-disable-next-line */
export interface HomePageProps { }

export const HomePage = (props: HomePageProps) => {


  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-4">
        <div className="col mb-4">
          <div className="card">
            <img src='https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png' className="card-img-top imgsize" alt="photo" />
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <h1 className="card-text card-text1">Written by-</h1>
              <p className="card-text">Book Description</p>
              <p className="card-text"><small className="text-muted">Book status</small></p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src='https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png' className="card-img-top imgsize" alt="photo" />
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">Book Description</p>
              <p className="card-text"><small className="text-muted">Book status</small></p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src='https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png' className="card-img-top imgsize" alt="photo" />
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">Book Description</p>
              <p className="card-text"><small className="text-muted">Book status</small></p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src='https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png' className="card-img-top imgsize" alt="photo" />
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">Book Description</p>
              <p className="card-text"><small className="text-muted">Book status</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
