import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT, CURRENT_USER_REQUEST, CURRENT_USER_SUCCESS, CURRENT_USER_FAIL } from './../constants/userConstants';

function userRegisterReducer(state = {}, action) {
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
function userLoginReducer(state = {}, action) {
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
function currentUserReducer(state = {}, action) {
  switch (action.type) {
    case CURRENT_USER_REQUEST:
      return { loading: true };
    case CURRENT_USER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CURRENT_USER_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default: return state;
  }
}

export {userRegisterReducer,userLoginReducer,currentUserReducer}