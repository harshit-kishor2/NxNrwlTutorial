import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from '../pages/NotFound';
import ActualRoute from './ActualRoute';
import AdminRoutes from './AdminRoutes';
import GuestRoutes from './GuestRoutes';
import routes from './index';
import UserRoutes from './UserRoutes';

const MainSection = ({ userInfo }) => {
    return (
        <div className="page-wrap">
            <Switch>
                {routes.map((route, index) => {
                    if (route.protected === 'guest') {
                        return (
                            <GuestRoutes user={userInfo} key={index} path={route.path} exact={route.exact}>{route.comp}</GuestRoutes>
                        )
                    }
                    if (route.protected === 'admin') {
                        return (
                            <AdminRoutes user={userInfo} key={index} path={route.path} exact={route.exact}>{route.comp}</AdminRoutes>
                        )
                    }
                    if (route.protected === 'user') {
                        return (
                            <UserRoutes user={userInfo} key={index} path={route.path} exact={route.exact}>{route.comp}</UserRoutes>
                        )
                    }
                    return (
                        <ActualRoute key={index} path={route.path} exact={route.exact}>{route.comp}</ActualRoute>
                    )
                })}
                <Route path="*"> <NotFound /></Route>
            </Switch>

        </div>
    )
}

export default MainSection