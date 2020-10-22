import {
  SEARCH_BOOK_REQUEST,
  SEARCH_BOOK_FAIL,
  SEARCH_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  DETAIL_BOOK_REQUEST,
  DETAIL_BOOK_SUCCESS,
  DETAIL_BOOK_FAIL,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST
} from './../constants/bookConstant';
import Axios from 'axios';

//======================================================================================================
export const addBookHandler = (id,name, author, description, items, imageurl) =>async (dispatch)=> {
     dispatch({ type: ADD_BOOK_REQUEST, payload: {id, name, author, description, items, imageurl} });
  try {
    if (id) {
       const {data} = await Axios.put("/api/admin/edit-book", {id,name, author, description, items, imageurl });  
     dispatch({ type: ADD_BOOK_SUCCESS, payload:data });
    } else {
      const {data} = await Axios.post("/api/admin/add-book", {name, author, description, items, imageurl });  
     dispatch({ type: ADD_BOOK_SUCCESS, payload:data });
    }
    
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
export const getBooksById = (id) => async (dispatch) => {
   dispatch({ type: DETAIL_BOOK_REQUEST});
  try {
     const {data}  = await Axios.get("/api/get-one-book/"+id)
     dispatch({type:DETAIL_BOOK_SUCCESS,payload:data})
  } catch (error) { 
    dispatch({
      type: DETAIL_BOOK_FAIL,
      payload: error.response&&error.response.data?error.response.data:error.response });
  } 
}

//======================================================================================================
export const bookRemovehandler = (id) => async (dispatch) => {
   dispatch({ type: DELETE_BOOK_REQUEST});
  try {
     const {data}  = await Axios.delete("/api/admin/delete-book/"+id)
     dispatch({type:DELETE_BOOK_SUCCESS,payload:data})
  } catch (error) { 
    dispatch({
      type: DELETE_BOOK_FAIL,
      payload: error.response&&error.response.data?error.response.data:error.response });
  } 
}