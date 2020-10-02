import { storeProducts } from '../../data';

const initialState = {
  items: {},
  isLoaded: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      const product = storeProducts.find((item) => item.id === action.payload.id);
      console.log('product from reducer', product, action.payload);
      return {
        ...state,
        items: product,
        isLoaded: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default products;
