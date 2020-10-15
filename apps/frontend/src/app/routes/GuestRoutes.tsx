import React from 'react'
import { useSelector } from 'react-redux'
import ActualRoute from './ActualRoute'
import { Redirect } from 'react-router-dom'
const GuestRoutes = ({ user, children, ...rest }) => {

    if (!user) {
        return <ActualRoute {...rest}>{children}</ActualRoute>
    }
    return (
        <div>
            <ActualRoute><Redirect to='/' /></ActualRoute>
        </div>
    )
}

export default GuestRoutes