import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AddBook from './AddBook'
import { getBooksById, bookRemovehandler } from 'apps/frontend/src/actions/bookAction'
const AdminDashboard = (props) => {
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(false)
    const [BookId, setBookId] = useState('')
    const searchBook = useSelector(state => state.searchBook)
    const { bookInfo } = searchBook
    useEffect(() => {
        if (BookId) {
            dispatch(getBooksById(BookId))
        }
    }, [BookId])
    return (
        <div>
            { flag && <AddBook id={BookId} show={flag}
                onHide={() => setFlag(false)} />}
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
                                <p className="card-text"><small className="text-muted">{book.items}</small></p>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <Link onClick={() => {
                                setFlag(!flag)
                                setBookId(book._id)
                            }} className='m-2' to='#'>Edit</Link>
                            <a className='m-2' href='/admin/manage-book' onClick={() => dispatch(bookRemovehandler(book._id))}>Delete</a>
                        </div>

                    </div>

                )
            }
        </div >
    )
}
export default AdminDashboard