import { combineReducers } from 'redux';

import ui from './ui-reducer';
import products from './products-reducer';
import search from './search-reducer';

export default combineReducers({
  ui,
  products,
  search
});
