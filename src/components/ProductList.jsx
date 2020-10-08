import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addProductToCart } from '../redux/actions/cart';
import ProductItem from './ProductItem';
import { setProducts } from '../redux/actions/products';

function ProductList() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ products }) => products);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(setProducts());
  }, []);

  const onAddProductToCart = React.useCallback((id) => {
    dispatch(addProductToCart(id));
  }, []);

  return (
    <div className="wrapper">
      <div className="product-list">
        {isLoaded &&
          items.map((obj) => (
            <ProductItem
              key={`product_item_${obj.id}`}
              {...obj}
              addedTotal={cartItems[obj.id] ? cartItems[obj.id] : ''}
              onClickAddProduct={onAddProductToCart}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
