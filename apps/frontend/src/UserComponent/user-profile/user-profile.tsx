import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './user-profile.css';
import { issueBookDetailsById } from '../../actions/issueBookAction';
import TableData from './TableData';

/* eslint-disable-next-line */
export interface UserProfileProps { }

export const UserProfile = (props: UserProfileProps) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser);
  const { userInfo } = currentUser;
  const issueBookListById = useSelector(state => state.issueBookListById)
  const { loading, issueBookInfo, error } = issueBookListById
  useEffect(() => {
    dispatch(issueBookDetailsById(userInfo._id))
  }, [])
  return (
    <>
      {loading ?
        <div>Please wait...</div>
        :
        <div>
          {issueBookInfo && issueBookInfo.map(books =>
            <TableData book={books} />
          )}
        </div>
      }




    </>

  );
};

export default UserProfile;
