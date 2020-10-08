import React from 'react';

function RenderField({ input, label, type, meta: { touched, error, warning } }) {
  return (
    <div className="redux-form-field">
      <label>{label}</label>
      <div className="box">
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && (
            <span>
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </span>
          )) ||
            (warning && (
              <span>
                <i className="fas fa-exclamation-circle"></i>
                {warning}
              </span>
            )))}
      </div>
    </div>
  );
}

export default RenderField;
