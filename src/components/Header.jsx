import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const cart = useSelector(({ cart }) => cart);
  return (
    <div id="header">
      <Link to="/">
        <div className="logo">
          <i className="fas fa-store"></i>
          <p className="logo-name">Simple Store</p>
        </div>
      </Link>
      <Link to="/cart">
        <div className="cart">
          {cart.totalCount ? (
            <>
              <p className="in-cart">${cart.totalPrice}</p>
              <p className="in-cart" style={{ margin: '0 10px' }}>
                |
              </p>
              <i className="fas fa-cart-plus small-cart"></i>
              <p className="in-cart" style={{ marginLeft: '10px' }}>
                {cart.totalCount}
              </p>
            </>
          ) : (
            <>
              <i className="fas fa-cart-plus"></i>
              <p className="in-cart" style={{ marginLeft: '10px' }}>My Cart</p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Header;
