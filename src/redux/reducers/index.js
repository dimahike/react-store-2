import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import details from './details';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
  details,
  products,
  cart,
  form: formReducer,
});

export default rootReducer;
