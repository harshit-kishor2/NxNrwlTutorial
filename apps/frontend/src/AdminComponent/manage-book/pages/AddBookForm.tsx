import { ErrorMessage, FastField, Field, FieldArray, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addBookHandler } from 'apps/frontend/src/actions/bookAction'
import { toast, ToastContainer } from 'react-toastify'
const AddBookForm = () => {
    const dispatch = useDispatch()

    const [imageurl, setimageurl] = useState('')
    const [name, setname] = useState('')
    const [author, setauthor] = useState('')
    const [description, setdescription] = useState('')
    const [items, setitems] = useState(null)

    const addBook = useSelector(state => state.addBook)
    const { loading, error, bookInfo } = addBook

    const handleSubmit = (value, { resetForm }) => {
        const { name, author, description, items, image } = value
        setname(name)
        setauthor(author)
        setdescription(description)
        setitems(items)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "SingsysLMS")
        data.append("cloud_name", "harshitkishor")
        fetch("	https://api.cloudinary.com/v1_1/harshitkishor/image/upload",
            {
                method: 'POST',
                body: data
            }).then(res => res.json())
            .then(data => {
                setimageurl(data.url)
            }).catch(err => console.log(err))
        resetForm()

    }

    useEffect(() => {
        if (imageurl) {
            console.log(imageurl)
            dispatch(addBookHandler(name, author, description, items, imageurl))
        }
    }, [imageurl])

    useEffect(() => {
        if (error) {
            toast.error("Some Error")
        }
        if (bookInfo) {
            toast.success('Success')
        }
    }, [error, bookInfo])

    return (
        <div>
            <ToastContainer />
            <Formik
                initialValues={{ name: "", author: "", description: "", items: '', image: '' }}
                onSubmit={handleSubmit}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Book Name is required"),
                    author: Yup.string().required("Author Name is required"),
                    description: Yup.string().required("Description is required"),
                    items: Yup.number("Should be number").required().positive("Should be number").integer("Should be number"),
                })}
            >
                {(formProps) => (
                    <div className="text-center">
                        <Form className='p-2'>
                            <div className="col mb-3">
                                <Field
                                    name="name"
                                    type="text"
                                    className="rounded shadow text-black text-center"
                                    placeholder="Book Name"
                                />
                                <p className='text-danger'><ErrorMessage name="name" /></p>
                            </div>
                            <div className="mb-3 col">
                                <Field
                                    name="author"
                                    type="text"
                                    className="rounded shadow text-black text-center"
                                    placeholder="Author Name"
                                />
                                <p className='text-danger'><ErrorMessage name="author" /></p>
                            </div>
                            <div className="mb-3 col">
                                <Field
                                    name="description" as='textarea'

                                    className="rounded shadow text-black text-center"
                                    placeholder="Description"
                                />
                                <p className='text-danger'><ErrorMessage name="description" /></p>
                            </div>
                            <div className="mb-3 col">
                                <Field
                                    name="items"
                                    type="text"
                                    className="rounded shadow text-black text-center"
                                    placeholder="How many items"
                                />
                                <p className='text-danger'><ErrorMessage name="items" /></p>
                            </div>
                            <div className="mb-3 col">
                                <input
                                    name="image"
                                    type="file"
                                    onChange={(e) => formProps.setFieldValue('image', e.target.files[0])}
                                    className="rounded shadow text-black text-center"
                                    placeholder="Select image"
                                />
                            </div>
                            <div className="">
                                {!loading ? <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Add Book
              </button>
                                    :
                                    <button className="btn btn-success" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   Loading...
                </button>}
                            </div>
                        </Form>
                    </div>
                )}


            </Formik>
        </div>
    )
}

export default AddBookForm