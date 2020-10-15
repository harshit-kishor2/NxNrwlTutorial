import React from 'react'
import './page.css'
import { Link } from 'react-router-dom'
const NotAuth = () => {
    return (
        <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">304</span>
                        <div className="mb-4 lead">You are not authorized.</div>
                        <Link to="/" className="btn btn-link">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotAuth
