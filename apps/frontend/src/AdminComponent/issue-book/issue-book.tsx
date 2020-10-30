import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './issue-book.css';
import { issueBookDetailsAction } from '../../actions/issueBookAction';
import TableData from '../../UserComponent/user-profile/TableData';

/* eslint-disable-next-line */
export interface IssueBookProps { }

export const IssueBook = (props: IssueBookProps) => {
  const dispatch = useDispatch()
  const issueBookDetails = useSelector(state => state.issueBookDetails)
  const { loading, issueBookInfo } = issueBookDetails
  useEffect(() => {
    dispatch(issueBookDetailsAction())
  }, [])

  return (
    <div>
      {loading ?
        <div>Please wait...</div>
        :
        <div>
          {issueBookInfo && issueBookInfo.map(books =>
            <TableData book={books} />
          )}
        </div>
      }
    </div>
  );
};

export default IssueBook;
