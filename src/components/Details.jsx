import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../data';
import { addProductToCart } from '../redux/actions/cart';
import imageProduct from '../require-images';
import Button from './Button';

function Details() {
  const dispatch = useDispatch();
  const { item, isLoaded } = useSelector(({ details }) => details);
  const cartItems = useSelector(({ cart }) => cart.items);

  const onHandleAddProduct = () => {
    dispatch(addProductToCart(item.id));
  };

  console.log('cartItems', cartItems);
  let totalPrice = 0;
  let totalCount = 0;

  if (cartItems[item.id]) {
    totalPrice = cartItems[item.id].totalPrice;
    totalCount = cartItems[item.id].totalCount;
  }

  return (
    <div id="details" className="wrapper">
      {isLoaded ? (
        <div className="paper">
          <div className="body">
            <div className="left">
              <img src={imageProduct(item.img)} alt={item.title} />
            </div>
            <div className="right">
              <div className="right-header">
                <h2 className="title">{item.title} </h2>
                <p className="subtitle">{item.company}</p>
                <p className="subtitle2">Price: $ {item.price}</p>
              </div>
              <div className="right-body">
                <h3>About this item</h3>
                {/* <br /> */}
                <p>{item.info}</p>
              </div>
              <Button
                className="details-btn"
                addedTotal={cartItems[item.id] ? cartItems[item.id] : ''}
                totalPrice={totalPrice}
                totalCount={totalCount}
                onClickAddProduct={onHandleAddProduct}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>hello</h1>
          <div className="header">
            <h1>{detailProduct.title} </h1>
          </div>
          <div className="body">
            <div className="left">
              <img src={imageProduct(detailProduct.img)} alt={detailProduct.title} />
            </div>
            <div className="right">
              <div className="right-header">
                <h2 className="title">{detailProduct.title} </h2>
                <p className="subtitle">{detailProduct.company}</p>
              </div>
              <div className="right-body">
                <h3>About this item</h3>
                {/* <br /> */}
                <p>{detailProduct.info}</p>
              </div>
              <Button
                className="details-btn"
                addedTotal={cartItems[detailProduct.id] ? cartItems[detailProduct.id] : ''}
                totalPrice={totalPrice}
                totalCount={totalCount}
                onClickAddProduct={onHandleAddProduct}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
