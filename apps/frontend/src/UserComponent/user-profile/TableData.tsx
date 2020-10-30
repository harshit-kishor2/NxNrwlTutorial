import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { issueBookAction, removeRequestAction } from '../../actions/issueBookAction'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const TableData = ({ book }) => {
    const [bookId, setBookId] = useState('')
    const [returnStatus, setReturnStatus] = useState(false)
    const [cancelStatus, setCancelStatus] = useState(false)
    const [issuedStatus, setIssueStatus] = useState(false)
    const currentUser = useSelector(state => state.currentUser)
    const { userInfo } = currentUser
    const dispatch = useDispatch()
    useEffect(() => {
        if (bookId && returnStatus) {
            dispatch(issueBookAction(bookId))
        }
        if (bookId && cancelStatus) {
            dispatch(removeRequestAction(bookId))
        }
        if (bookId && issuedStatus) {
            dispatch(issueBookAction(bookId))
        }
    }, [bookId])
    return (
        <div key={book._id} className="row m-2">
            <div className='col-lg-3'>
                <img src={book.bookId.imageurl} className="card-img-top imgsize" alt="photo" />
            </div>
            <div className="col-lg-7">
                <div className="card-body">
                    <h5 className="card-title">{book.bookId.bookName}</h5>
                    <h1 className="card-text card-text1">{book.bookId.authorName}-</h1>
                    <div className="card-text">
                        <h6>{book.bookId.description}</h6>
                        <small className="text-muted">Requested By-{book.userId.name}</small> <br />
                        <small className=" text-muted">Issue Date-{book.issueDate} </small> <br />
                        <small className=" text-muted">Return Date-{book.returnDate} </small>
                    </div>
                </div>
            </div>
            <div className='col-lg-2'>
                {book.bookStatus == 'Issued' ?
                    <div className="row">
                        <span className="badge badge-warning">{book.bookStatus}</span>
                        {userInfo.isAdmin && <a href='/admin/issue-book' onClick={() => { setBookId(book._id); setReturnStatus(true); setCancelStatus(false); setIssueStatus(false) }} className="badge badge-danger m-1">Return Book</a>}
                    </div>
                    :
                    book.bookStatus == 'Requested' ?
                        <div className='row'>
                            <span className="badge badge-info">{book.bookStatus}</span>
                            <a href='#' onClick={() => { setBookId(book._id); setReturnStatus(false); setCancelStatus(true); setIssueStatus(false) }} className="badge badge-danger m-1">Cancel Request</a>
                            {userInfo.isAdmin && <a href='/admin/issue-book' onClick={() => { setBookId(book._id); setReturnStatus(false); setCancelStatus(false); setIssueStatus(true) }} className="badge badge-danger m-1">Issue Book</a>}
                        </div>
                        :
                        <div className='row'>
                            <span className="badge badge-success">{book.bookStatus}</span>
                        </div>
                }
            </div>

        </div >
    )
}
export default TableData