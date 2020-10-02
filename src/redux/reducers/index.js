import { combineReducers } from 'redux';

import details from './details';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
  details,
  products,
  cart,
});

export default rootReducer;
