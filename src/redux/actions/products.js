// you fetch data from json server amd youn need install axios

// import axios from 'axios';
// export const fetchProducts = (urlFetch) => (dispatch) => {
//   axios.get(urlFetch).then(({ data }) => {
//     dispatch(setProducts(data));
//   });
// };

// export const setProducts = (items) => ({
//   type: 'SET_PIZZAS',
//   payload: items,
// });

import { storeProducts } from '../../data';

// export const fetchProducts = () => (dispatch) => {
//   dispatch(setProducts(storeProducts));
// };

export const setProducts = () => ({
  type: 'SET_PRODUCTS',
  payload: storeProducts,
});
