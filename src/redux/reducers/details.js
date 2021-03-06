import { detailProduct, storeProducts } from '../../data';

const initialState = {
  item: detailProduct,
  isLoaded: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      const product = storeProducts.find((item) => (item.id === action.payload));
      console.log('product from details reducer', product, action.payload);

      return {
        ...state,
        item: product,
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
