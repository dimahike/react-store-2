import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ id, price, total, title, company, img, onClickAddProduct, addedTotal }) {
  const { totalCount, totalPrice } = addedTotal;

  const onHandleAddProduct = () => {
    let obj = { id, price, total, title, company, img };
    onClickAddProduct(obj);
  };

  return (
    <div className="product">
      <div className="price">
        <span>Price: $ {price}</span>
      </div>
      <div className="image-box">
        <Link to={`/details/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>
      <div className="content">
        <div style={{ height: '100px' }}>
          <Link to={`/details/${id}`}>
            <h3>{title}</h3>
            <p>{company}</p>
          </Link>
        </div>
        <div className="cart">
          <div />
          {addedTotal ? (
            <>
              <button onClick={onHandleAddProduct}>
                $ {totalPrice}
                <span>
                  <i style={{ marginRight: '15px' }} className="fas fa-cart-plus"></i>
                  {totalCount}
                </span>
              </button>
            </>
          ) : (
            <button onClick={onHandleAddProduct}>
              <i className="fas fa-cart-plus"></i>
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
