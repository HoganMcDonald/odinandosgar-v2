import { SET_SEARCH_TERMS } from '../constants';

export default function(state='', action) {
  switch (action.type) {
    case SET_SEARCH_TERMS:
      return action.searchTerms;
    default:
      return state;
  }
}
