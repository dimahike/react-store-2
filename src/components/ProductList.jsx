import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/actions/cart';
// import { getProducts } from '../redux/actions/products';

import { storeProducts } from '../data.js';
import ProductItem from './ProductItem';
import { setProducts } from '../redux/actions/products';

function ProductList() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ products }) => products);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(setProducts());
    console.log('storeProducts from productList: ', storeProducts);
  }, []);

  const onAddProductToCart = React.useCallback((obj) => {
    dispatch(addProductToCart(obj));
  }, []);

  return (
    <div className="product-list">
      {isLoaded &&
        items.map((obj) => (
          <ProductItem
            key={obj.id}
            {...obj}
            addedTotal={cartItems[obj.id] ? cartItems[obj.id] : ''}
            onClickAddProduct={onAddProductToCart}
          />
        ))}
    </div>
  );
}

export default ProductList;
