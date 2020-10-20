import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  CURRENT_USER_REQUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_FAIL
} from './../constants/userConstants';

//==========================================================================================================
export function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
//==========================================================================================================
export function userLoginReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
//==========================================================================================================
export function currentUserReducer(state = {}, action) {
  switch (action.type) {
    case CURRENT_USER_REQUEST:
      return { loading: true };
    case CURRENT_USER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CURRENT_USER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
//==========================================================================================================

export function passwordReducer(state = {}, action) {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
//==========================================================================================================