import { SET_ALERT, CLEAR_ALERTS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case CLEAR_ALERTS:
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};
