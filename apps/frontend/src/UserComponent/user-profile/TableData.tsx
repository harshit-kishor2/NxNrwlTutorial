import React from 'react'
const TableData = ({ book }) => {

    return (
        <div key={book._id} className="row m-2">
            <div className='col-lg-3'>
                <img src={book.bookId.imageurl} className="card-img-top imgsize" alt="photo" />
            </div>
            <div className="col-lg-7">
                <div className="card-body">
                    <h5 className="card-title">{book.bookId.bookName}</h5>
                    <h1 className="card-text card-text1">{book.bookId.authorName}-</h1>
                    <p className="card-text">{book.bookId.description}</p>
                    <p className="card-text"><small className="text-muted">{book.items}</small></p>
                </div>
            </div>
            <div className='col-lg-2'>
                {book.bookStatus == 'Issued' ?
                    <span className="badge badge-warning">{book.bookStatus}</span>
                    :
                    book.bookStatus == 'Requested' ?
                        <span className="badge badge-danger">{book.bookStatus}</span>
                        :
                        <span className="badge badge-success">{book.bookStatus}</span>
                }
            </div>

        </div>
    )
}
export default TableData