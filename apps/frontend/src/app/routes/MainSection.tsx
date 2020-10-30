import React from 'react'
import { Route, Switch } from "react-router-dom";
import ManageBook from '../../AdminComponent/manage-book/manage-book';
import ManageUser from '../../AdminComponent/manage-user/manage-user';
import Dashboard from '../../component/dashboard/dashboard';
import ForgotPassword from '../../component/forgot-password/forgot-password';
import Login from '../../component/login/login';
import Registartion from '../../component/registartion/registartion';
import ResetPassword from '../../component/reset-password/reset-password';
import IssueBook from '../../AdminComponent/issue-book/issue-book';
import IssueBooks from '../../UserComponent/issue-books/issue-books';
import UserProfile from '../../UserComponent/user-profile/user-profile';
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
                                <Route path='/admin/manage-book' exact component={ManageBook} />
                                <Route path='/admin/issue-book' exact component={IssueBook} />
                                <Route path="*"> <NotFound /></Route>
                            </Switch>
                            :
                            <Switch>
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/user/user-profile' exact component={UserProfile} />
                                <Route path='/user/issue-book' exact component={IssueBooks} />
                                <Route path="*"> <NotFound /></Route>
                            </Switch>


                }

            </>

        </div >
    )
}

export default MainSection