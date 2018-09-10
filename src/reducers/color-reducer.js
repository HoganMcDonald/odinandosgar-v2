import { ADD_COLOR, REMOVE_COLOR } from '../constants';

export default function(state=[], action) {
  switch (action.type) {
    case ADD_COLOR:
      return [...state, action.color];
    case REMOVE_COLOR:
      return state.filter(color => color !== action.color);
    default:
      return state;
  }
}
