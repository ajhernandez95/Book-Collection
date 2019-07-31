import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        errors: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        errors: null
      };
    default:
      return {};
  }
};
