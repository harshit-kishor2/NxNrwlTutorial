import React from 'react'
import ActualRoute from './ActualRoute'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
const AdminRoutes = ({ user, children, ...rest }) => {

    if (user.isAdmin)
        return (
            <ActualRoute {...rest}>{children}</ActualRoute>
        )
    if (!user.isAdmin)
        return (
            <ActualRoute {...rest}><Redirect to='/not-auth' /></ActualRoute>
        )
    return (
        <div>
            <ActualRoute {...rest}><Redirect to='/' /></ActualRoute>
        </div>
    )
}

export default AdminRoutes