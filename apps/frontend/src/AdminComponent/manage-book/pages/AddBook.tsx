import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import AddBookForm from './AddBookForm'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksById } from 'apps/frontend/src/actions/bookAction'

const AddBook = (props) => {
    const dispatch = useDispatch()
    const bookById = useSelector(state => state.bookById)
    const { loading, bookInfo } = bookById
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.id ? <p>Edit Book</p> : <p>Add Book</p>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!loading && <AddBookForm book={bookInfo} />}
            </Modal.Body>
        </Modal>
    )
}
export default AddBook
