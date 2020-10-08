export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength30 = maxLength(30);
const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const number = (value) => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;
export const phoneNumber = (value) =>
  value &&
  !/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/i.test(
    value,
  )
    ? 'Invalid phone number'
    : undefined;
