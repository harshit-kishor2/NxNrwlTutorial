import React, { useEffect } from 'react';

import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../../actions/bookAction';
/* eslint-disable-next-line */
export interface DashboardProps { }

export const Dashboard = (props) => {
  const searchBook = useSelector(state => state.searchBook)
  const { bookInfo } = searchBook
  return (
    <div>
      <div className="row row-cols-2 row-cols-sm-4">
        {
          bookInfo.map(book =>
            <div key={book._id} className="col mb-4">
              <div className="card">
                <img src={book.imageurl} className="card-img-top imgsize" alt="photo" />
                <div className="card-body">
                  <h5 className="card-title">{book.bookName}</h5>
                  <h1 className="card-text card-text1">{book.authorName}-</h1>
                  <p className="card-text">{book.description}</p>
                  <p className="card-text"><small className="text-muted">{book.items}</small></p>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>
  );
};

export default Dashboard;
