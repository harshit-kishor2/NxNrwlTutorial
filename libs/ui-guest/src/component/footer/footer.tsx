import React from 'react';

import './footer.css';

/* eslint-disable-next-line */
export interface FooterProps { }

export const Footer = (props: FooterProps) => {
  return (
    <div className='mt-4'>
      <div className="card-footer bg-info text-white border-success text-center">Copyright Ⓒ 2020 SingsysPteLtd. <br />All rights reserved</div>
    </div>
  );
};

export default Footer;
