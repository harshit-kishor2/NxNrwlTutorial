import {
  SEARCH_BOOK_REQUEST,
  SEARCH_BOOK_FAIL,
  SEARCH_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS
} from './../constants/bookConstant';
import Axios from 'axios';

//======================================================================================================
export const addBookHandler = (name, author, description, items, imageurl) =>async (dispatch)=> {
     dispatch({ type: ADD_BOOK_REQUEST, payload: { name, author, description, items, imageurl} });
  try {
    const {data} = await Axios.post("/api/admin/add-book", {name, author, description, items, imageurl });  
     dispatch({ type: ADD_BOOK_SUCCESS, payload:data });
  } catch (error) { 
    dispatch({
      type: ADD_BOOK_FAIL,
      payload: error.response&&error.response.data?error.response.data:error.response });
  } 
}
//======================================================================================================
export const getAllBooks = () => async (dispatch) => {
  dispatch({ type: SEARCH_BOOK_REQUEST});
  try {
     const {data}  = await Axios.get("/api/get-all-books")
  dispatch({type:SEARCH_BOOK_SUCCESS,payload:data})
  } catch (error) { 
    dispatch({
      type: SEARCH_BOOK_FAIL,
      payload: error.response&&error.response.data?error.response.data:error.response });
  } 
 
}

//======================================================================================================