import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { issueBookRequest } from '../../actions/issueBookAction';
import './issue-books.css';

/* eslint-disable-next-line */
export interface IssueBookProps { }

export const IssueBook = (props: IssueBookProps) => {
  const dispatch = useDispatch()
  const [BookId, setBookId] = useState('')
  const searchBook = useSelector(state => state.searchBook)
  const { bookInfo } = searchBook
  const currentUser = useSelector(state => state.currentUser);
  const { userInfo } = currentUser;
  const issueBook = useSelector(state => state.issueBook)
  const { issueBookInfo, error } = issueBook
  useEffect(() => {
    if (BookId) {
      dispatch(issueBookRequest(BookId, userInfo._id))
    }
  }, [BookId])
  useEffect(() => {
    if (error) {
      toast.error("Yor already requested for this book")
    }
  }, [error])
  useEffect(() => {
    if (issueBookInfo) {
      toast.success("Succesfully requested")
    }
  }, [issueBookInfo])
  return (
    <div>
      <ToastContainer />
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
              <Link className='m-2' to='#' onClick={() => setBookId(book._id)}>Issue Book</Link>
            </div>
          </div>

        )


      }
    </div>
  );
};

export default IssueBook;
