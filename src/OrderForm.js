import React, { useEffect, useState } from 'react';
import { orderValidationSchema } from './validationSchema';

const initialFormValues = {
  name: '',
  size: '',
  special: '',
};

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
};

function OrderForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabledButton, setDisabledButton] = useState(true);
  const [errors, setErrors] = useState(initialFormErrors);

  const onFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    orderValidationSchema.isValid(formValues).then((res) => {
      setDisabledButton(!res);
    });
  }, [formValues]);

  const toppings = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage'];

  return (
    <div>
      <h2>Order Your Pizza</h2>
      <form id="pizza-form">
        <label>
          Name:
          <input
            name="name"
            type="text"
            onChange={onFormChange}
            value={formValues.name}
            id="name-input"
          />
          {errors.name.length > 0 && <div>{errors.name}</div>}
        </label>
        <label>
          Size:
          <select
            name="size"
            onChange={onFormChange}
            value={formValues.size}
            id="size-dropdown"
          >
            {/* Add your pizza size options here */}
          </select>
          {errors.size.length > 0 && <div>{errors.size}</div>}
        </label>
        <label>
        {toppings.map((topping, index) => (
        <label key={index}>
          {topping}
        <input type="checkbox" name={`topping-${index}`} />
      </label>
              ))}
          Special Instructions:
          <textarea
            name="special"
            onChange={onFormChange}
            value={formValues.special}
            id="special-text"
          />
          {errors.special.length > 0 && <div>{errors.special}</div>}
        </label>
        <button type="submit" disabled={disabledButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
