import React from 'react'
import { Route, Switch } from "react-router-dom";
import ManageBook from '../../AdminComponent/manage-book/manage-book';
import ManageUser from '../../AdminComponent/manage-user/manage-user';
import Dashboard from '../../component/dashboard/dashboard';
import ForgotPassword from '../../component/forgot-password/forgot-password';
import Login from '../../component/login/login';
import Registartion from '../../component/registartion/registartion';
import ResetPassword from '../../component/reset-password/reset-password';
import NotFound from '../pages/NotFound';

const MainSection = ({ userInfo }) => {

    return (
        <div className="page-wrap">
            <>
                {
                    !userInfo ?
                        <Switch>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/registration' exact component={Registartion} />
                            <Route path='/forgot-password' exact component={ForgotPassword} />
                            <Route path='/reset-password/:token' exact component={ResetPassword} />
                            <Route path="*"> <NotFound /></Route>
                        </Switch>
                        :
                        userInfo.isAdmin ?
                            <Switch>
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/admin/manage-user' exact component={ManageUser} />
                                <Route path='/admin/manage-book' exact component={ManageBook} />
                                <Route path="*"> <NotFound /></Route>
                            </Switch>
                            :
                            <Switch>
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/user-profile' exact component={ManageUser} />
                                <Route path='/issue-book' exact component={ManageBook} />
                                <Route path="*"> <NotFound /></Route>
                            </Switch>


                }

            </>

        </div >
    )
}

export default MainSection