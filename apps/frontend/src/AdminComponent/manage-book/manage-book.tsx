import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './manage-book.css';
import AddBook from './pages/AddBook';
import { useSelector } from 'react-redux'
import AdminDashboard from './pages/AdminDashboard';
//==========================================================================================================
/* eslint-disable-next-line */
export interface ManageBookProps { }
//==========================================================================================================
const ManageBook = (props: ManageBookProps) => {
  const [flag, setFlag] = useState(false)
  return (
    <>
      <AdminDashboard />
      <div className=''>
        {
          flag && <AddBook show={flag}
            onHide={() => setFlag(false)} />
        }
        <Link to='#' onClick={() => setFlag(!flag)}><div className='add bg-info text-white'><h1>+</h1></div></Link>
      </div>
    </>
  );
};

export default ManageBook;
