import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './issue-book.css';
import { issueBookDetailsAction } from '../../actions/issueBookAction';
import TableData from '../../UserComponent/user-profile/TableData';
import SearchIssueBooks from './SearchIssueBooks';

/* eslint-disable-next-line */
export interface IssueBookProps { }

export const IssueBook = (props: IssueBookProps) => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('All')
  const issueBookDetails = useSelector(state => state.issueBookDetails)
  const { loading, issueBookInfo } = issueBookDetails
  useEffect(() => {
    dispatch(issueBookDetailsAction())
  }, [])
  const sortHandler = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div>
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
    </div>
  );
};

export default IssueBook;
