import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addProductToCart,
  clearCart,
  deleteProductToCart,
  subtractProductToCart,
} from '../redux/actions/cart';
import imageProduct from '../require-images';
import Button from './Button';
import Order from './Order';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart }) => cart);

  const onClickAddProduct = (id) => () => {
    dispatch(addProductToCart(id));
  };

  const onClickSubtractProduct = (id) => () => {
    dispatch(subtractProductToCart(id));
  };

  const onClickDeleteProduct = (id) => () => {
    dispatch(deleteProductToCart(id));
  };

  const onClickClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="wrapper">
      <div id="cart">
        {Object.values(cartItems.items)[0] ? (
          <div className="main">
            <div className="left">
              <div className="paper">
                <div className="header">
                  <h1>
                    <i className="fas fa-shopping-cart"></i> Your Cart
                  </h1>
                </div>
                <div className="body">
                  <div className="table-header">PRODUCTS</div>
                  <div className="table-header">NAME OF PRODUCT</div>
                  <div className="table-header">PRICE</div>
                  <div className="table-header">QUANTITY</div>
                  <div className="table-header">REMOVE</div>
                  <div className="table-header">TOTAL</div>

                  {Object.values(cartItems.items).map((product) => (
                    <React.Fragment key={`product_from_cart_${product.item.id}`}>
                      <div className="product-image">
                        <img src={imageProduct(product.item.img)} alt={product.item.title} />
                      </div>
                      <div className="product-title font-w-600 ">{product.item.title} </div>
                      <div className="product-price font-w-600 ">
                        <span className="hidden-title">Price : </span> $ {product.item.price}{' '}
                      </div>
                      <div className="product-total-count font-w-600">
                        <i
                          onClick={onClickSubtractProduct(product.item.id)}
                          className="fas fa-minus"></i>
                        <span> {product.totalCount}</span>
                        <i onClick={onClickAddProduct(product.item.id)} className="fas fa-plus"></i>
                      </div>
                      <div className="product-remove">
                        <i
                          onClick={onClickDeleteProduct(product.item.id)}
                          className="fas fa-trash-alt"></i>
                      </div>
                      <div className="product-total-price font-w-600">
                        <span className="hidden-title">Total Price : </span>$ {product.totalPrice}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className="footer">
                  <div className="left" />
                  <div className="right">
                    <button onClick={onClickClearCart}>
                      <i className="fas fa-trash-alt"></i>Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Order cartItems={cartItems} />
            </div>
          </div>
        ) : (
          <div className="paper">
            <div className="empty-cart wrapper">
              <h1>YOUR CART IS CURENTLY EMPTY</h1>

              <Link className="btn-link" to="/">
                <Button emptyCart={true} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
