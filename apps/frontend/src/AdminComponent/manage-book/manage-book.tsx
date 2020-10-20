import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Dashboard from '../../component/dashboard/dashboard';
import './manage-book.css';
import AddBook from './pages/AddBook';
//==========================================================================================================
/* eslint-disable-next-line */
export interface ManageBookProps { }
//==========================================================================================================
const ManageBook = (props: ManageBookProps) => {
  const [flag, setFlag] = useState(false)

  return (
    <>
      <div>
        <Dashboard />
      </div>

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
