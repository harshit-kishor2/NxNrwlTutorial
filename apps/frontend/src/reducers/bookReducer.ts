import {
  SEARCH_BOOK_REQUEST,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
  DETAIL_BOOK_SUCCESS,
  DETAIL_BOOK_REQUEST,
  DETAIL_BOOK_FAIL,
} from './../constants/bookConstant';


export function addBookReducer(state = {}, action) {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return { loading: true };
    case ADD_BOOK_SUCCESS:
      return { loading: false, bookInfo: action.payload };
    case ADD_BOOK_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function searchBookReducer(state = {bookInfo:[]}, action) {
  switch (action.type) {
    case SEARCH_BOOK_REQUEST:
      return { loading: true,bookInfo:[] };
    case SEARCH_BOOK_SUCCESS:
      return { loading: false, bookInfo: action.payload };
    case SEARCH_BOOK_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function searchBookByIDReducer(state = {bookInfo:{}}, action) {
  switch (action.type) {
    case DETAIL_BOOK_REQUEST:
      return { loading: true,bookInfo:{} };
    case DETAIL_BOOK_SUCCESS:
      return { loading: false, bookInfo: action.payload };
    case DETAIL_BOOK_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}