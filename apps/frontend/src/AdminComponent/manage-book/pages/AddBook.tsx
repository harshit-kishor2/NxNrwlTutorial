import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import AddBookForm from './AddBookForm'
const AddBook = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Books
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddBookForm />

            </Modal.Body>
        </Modal>
    )
}
export default AddBook
