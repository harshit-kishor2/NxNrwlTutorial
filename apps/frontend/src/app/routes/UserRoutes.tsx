import React from 'react'
import ActualRoute from './ActualRoute'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
const UserRoutes = ({ user, children, ...rest }) => {

    if (!user.isAdmin)
        return (
            <ActualRoute {...rest}>{children}</ActualRoute>
        )
    if (user.isAdmin)
        return (
            <ActualRoute {...rest}><Redirect to='/not-auth' /></ActualRoute>
        )
    return (
        <div>
            <ActualRoute><Redirect to='/' /></ActualRoute>
        </div>
    )
}

export default UserRoutes