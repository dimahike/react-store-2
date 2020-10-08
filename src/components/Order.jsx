import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { clearCart } from '../redux/actions/cart';
import {
  required,
  minLength2,
  maxLength15,
  maxLength30,
  alphaNumeric,
  email,
  phoneNumber,
} from '../utils/validators';
import RenderField from './RenderField';

function Order({ submitting, error, handleSubmit, cartItems }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const submit = (values) => {
    const orderId = `order_${+new Date()}`;

    const objOrder = {
      [orderId]: {
        contacts: values,
        cart: cartItems,
      },
    };

    console.log(`Order from ${values.firstName} ${values.secondName}`, objOrder);

    //  you can clear cart after order
    dispatch(clearCart());

    history.push('/');
  };

  return (
    <div className="order paper">
      <h2 className="title">Make Your Order</h2>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="firstName"
          type="text"
          component={RenderField}
          label="First Name"
          validate={[required, minLength2, maxLength15]}
        />
        <Field
          name="secondName"
          type="text"
          component={RenderField}
          label="Second Name"
          validate={[required, minLength2, maxLength15]}
        />
        <Field
          name="address"
          type="text"
          component={RenderField}
          label="Address"
          validate={[required, maxLength30, minLength2]}
          warning={alphaNumeric}
        />
        <Field
          name="email"
          type="email"
          component={RenderField}
          label="Email"
          validate={[required, email]}
        />

        <Field
          name="phone"
          type="number"
          component={RenderField}
          label="Phone number"
          validate={[required, phoneNumber]}
        />
        {error && <strong>{error}</strong>}
        <div className="order-btn">
          <button type="submit" disabled={submitting}>
            Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  // a unique name for the form
  form: 'orderForm',
})(Order);

// export default Order;
