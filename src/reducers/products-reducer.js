import { SET_PRODUCTS } from '../constants';

export default function(state = { deviceType: 'desktop' }, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...action.products
      };
    default:
      return state;
  }
}
