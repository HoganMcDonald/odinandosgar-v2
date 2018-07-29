import { combineReducers } from 'redux';

import ui from './ui-reducer';
import products from './products-reducer';

export default combineReducers({
  ui,
  products
});
