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
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        errors: action.payload
      };
    default:
      return {};
  }
};
