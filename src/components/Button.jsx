import React from 'react';

function Button({
  onClickAddProduct,
  totalCount,
  totalPrice,
  addedTotal,
  className,
  emptyCart = false,
}) {
  return (
    <div className={className}>
      {addedTotal ? (
        <>
          <button className="btn-price-count" onClick={onClickAddProduct}>
            $ {totalPrice}
            <span>
              <i style={{ marginRight: '15px' }} className="fas fa-cart-plus"></i>
              {totalCount}
            </span>
          </button>
        </>
      ) : (
        <button className="btn-price-count" onClick={onClickAddProduct}>
          {emptyCart ? (
            "Back To Products"
          ) : (
            <>
              <i className="fas fa-cart-plus"></i>
              <span>Add to Cart</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default Button;
