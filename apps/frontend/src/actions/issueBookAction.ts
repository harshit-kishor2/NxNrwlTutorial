import  Axios  from 'axios';
import {
  ISSUE_BOOK_BYID_FAIL,
  ISSUE_BOOK_BYID_REQUEST,
  ISSUE_BOOK_BYID_SUCCESS,
    ISSUE_BOOK_FAIL,
    ISSUE_BOOK_REQUEST,
    ISSUE_BOOK_SUCCESS
} from '../constants/issueBookConstatnst';

export const issueBookRequest = (BookId, userId) => async (dispatch) => {
    dispatch({ type: ISSUE_BOOK_REQUEST, payload: {BookId, userId} });
  try { 
       const {data} = await Axios.post("/api/issue-book", {BookId, userId});  
       dispatch({ type: ISSUE_BOOK_SUCCESS, payload:data }); 
  } catch (error) { 
    dispatch({
      type: ISSUE_BOOK_FAIL,
      payload: error.response&&error.response.data?error.response.data:error.response });
  } 
}

export const issueBookDetailsById = (userId) => async (dispatch) => {
   dispatch({ type: ISSUE_BOOK_BYID_REQUEST, payload: {userId} });
  try { 
       const {data} = await Axios.get("/api/issue-book/"+userId);  
       dispatch({ type: ISSUE_BOOK_BYID_SUCCESS, payload:data }); 
  } catch (error) { 
    dispatch({
      type: ISSUE_BOOK_BYID_FAIL,
      payload: error.response&&error.response.data?error.response.data:error.response });
  } 
}