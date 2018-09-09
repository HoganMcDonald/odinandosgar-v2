import { SET_SEARCH_TERMS } from '../constants';

export const updateSearchTerms = searchTerms => ({
  type: SET_SEARCH_TERMS,
  searchTerms
});