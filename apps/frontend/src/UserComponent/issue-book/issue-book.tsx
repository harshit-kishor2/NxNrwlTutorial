import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './issue-book.css';

/* eslint-disable-next-line */
export interface IssueBookProps { }

export const IssueBook = (props: IssueBookProps) => {
  const dispatch = useDispatch()
  const [BookId, setBookId] = useState('')
  const searchBook = useSelector(state => state.searchBook)
  const { bookInfo } = searchBook
  useEffect(() => {
    if (BookId) {
      console.log(BookId)
    }
  }, [BookId])
  return (
    <div>
      {
        bookInfo.map(book =>
          <div key={book._id} className="row">
            <div className='col-lg-3'>
              <img src={book.imageurl} className="card-img-top imgsize" alt="photo" />
            </div>
            <div className="col-lg-7">
              <div className="card-body">
                <h5 className="card-title">{book.bookName}</h5>
                <h1 className="card-text card-text1">{book.authorName}-</h1>
                <p className="card-text">{book.description}</p>
                <p className="card-text">{book._id}</p>
                <p className="card-text"><small className="text-muted">{book.items}</small></p>
              </div>
            </div>
            <div className='col-lg-2'>
              <Link className='m-2' to='#' onClick={() => setBookId(book._id)}>IssueBook</Link>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default IssueBook;
