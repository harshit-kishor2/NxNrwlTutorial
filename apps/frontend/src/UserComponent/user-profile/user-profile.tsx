import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './user-profile.css';
import { issueBookDetailsById } from '../../actions/issueBookAction';
import TableData from './TableData';
import SearchIssueBooks from '../../AdminComponent/issue-book/SearchIssueBooks';

/* eslint-disable-next-line */
export interface UserProfileProps { }

export const UserProfile = (props: UserProfileProps) => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('All')
  const currentUser = useSelector(state => state.currentUser);
  const { userInfo } = currentUser;
  const issueBookListById = useSelector(state => state.issueBookListById)
  const { loading, issueBookInfo, error } = issueBookListById
  useEffect(() => {
    dispatch(issueBookDetailsById(userInfo._id))
  }, [])
  const sortHandler = (e) => {
    setFilter(e.target.value)
  }
  return (
    <>
      {loading ?
        <div>Please wait...</div>
        :
        <div>
          <div className="text-center mb-3">
            Sort By {' '}
            <select name="sortOrder" onChange={sortHandler}>
              <option value="All">All</option>
              <option value="Returned">Returned</option>
              <option value="Issued">Issued</option>
              <option value="Requested">Requested</option>
            </select>
          </div>
          <SearchIssueBooks issueBookInfo={issueBookInfo} filter={filter} />
        </div>
      }




    </>

  );
};

export default UserProfile;
