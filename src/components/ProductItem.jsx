import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDetails } from '../redux/actions/details';
import imageProduct from '../require-images';
import Button from './Button';

function ProductItem({ id, price, title, company, img, onClickAddProduct, addedTotal }) {
  const { totalCount, totalPrice } = addedTotal;
  const dispatch = useDispatch();

  const onHandleAddProduct = () => {
    onClickAddProduct(id);
  };

  const onClickDetails = () => {
    dispatch(setDetails(id));
    console.log(' details from product');
  };

  return (
    <div className="product paper">
      <div className="price">
        <span>Price: $ {price}</span>
      </div>
      <div className="image-box">
        <Link to={`/details`} onClick={onClickDetails}>
          <img src={imageProduct(img)} alt={title} />
        </Link>
      </div>
      <div className="content">
        <div className="title-content">
          <Link to={`/details`}>
            <h3>{title}</h3>
            <p>{company}</p>
          </Link>
        </div>
        <div className="cart">
          <div />
          <Button
            addedTotal={addedTotal}
            totalPrice={totalPrice}
            totalCount={totalCount}
            onClickAddProduct={onHandleAddProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
