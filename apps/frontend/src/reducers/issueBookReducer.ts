import { ISSUE_BOOK_BYID_FAIL, ISSUE_BOOK_BYID_REQUEST, ISSUE_BOOK_BYID_SUCCESS, ISSUE_BOOK_DETAILS_FAIL, ISSUE_BOOK_DETAILS_REQUEST, ISSUE_BOOK_DETAILS_SUCCESS, ISSUE_BOOK_FAIL, ISSUE_BOOK_REQUEST, ISSUE_BOOK_SUCCESS } from '../constants/issueBookConstatnst';


export function issueBookReducer(state ={}, action) {
  switch (action.type) {
    case ISSUE_BOOK_REQUEST:
      return { loading: true };
    case ISSUE_BOOK_SUCCESS:
      return { loading: false, issueBookInfo: action.payload };
    case ISSUE_BOOK_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function issueBookByIDReducer(state = {issueBookInfo:[]}, action) {
  switch (action.type) {
    case ISSUE_BOOK_BYID_REQUEST:
      return { loading: true,issueBookInfo:[] };
    case ISSUE_BOOK_BYID_SUCCESS:
      return { loading: false, issueBookInfo: action.payload };
    case ISSUE_BOOK_BYID_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function issueBookDetailsReducer(state = {issueBookInfo:[]}, action) {
  switch (action.type) {
    case ISSUE_BOOK_DETAILS_REQUEST:
      return { loading: true,issueBookInfo:[] };
    case ISSUE_BOOK_DETAILS_SUCCESS:
      return { loading: false, issueBookInfo: action.payload };
    case ISSUE_BOOK_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}