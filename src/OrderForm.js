import React, { useEffect, useState } from 'react';
import { orderValidationSchema } from './validationSchema';
import axios from 'axios';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  onions: false,
  sausage: false,
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
  //const [orders, setorders] = useState([]);

  /*const formSubmit = e => {
    e.preventDefault();
    
    axios
      .post("https://reqres.in/api/orders", formValues)
      .then(res => {
        console.log("success", res);
      })
      .catch(err => console.log(err.response));
  };
*/
  const onFormSubmit = (e) => {
  
  e.preventDefault();
  console.log(formValues, 'formValues')
  axios.post('https://reqres.in/api/orders', formValues)
  
  .then(res => {
    console.log(res)
    
  })
  .catch(err => console.error(err))
  .finally(() => setFormValues(initialFormValues))
}


    const onFormChange = (e) => {
    const { name, value } = e.target;
    
    orderValidationSchema
      .validateAt(name, { ...formValues, [name]: value })
      .then(() => {
        setErrors({ ...errors, [name]: '' });
      })
      .catch((error) => {
        setErrors({ ...errors, [name]: error.errors[0] });
      });
    setFormValues({ ...formValues, [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };


  useEffect(() => {
    orderValidationSchema.isValid(formValues).then((valid) => {
      setDisabledButton(!valid);
    });
  }, [formValues]);

  const toppings = ['Pepperoni', 'Mushrooms', 'onions', 'Sausage'];

  return (
    <div>
      <h2>Order Your Pizza</h2>
      <form id="pizza-form" onSubmit={onFormSubmit}>
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
            <option value="">--Select a size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
          {errors.size.length > 0 && <div>{errors.size}</div>}
        </label>
        <label>
          {toppings.map((topping, index) => (
            <label key={index}>
              {topping}
              <input
                type="checkbox"
                name={topping.toLowerCase()}
                onChange={onFormChange}
                checked={formValues[topping.toLowerCase()]}
              />
            </label>
          ))}
           Here are the special instructions:
          <input
            name="special"
            type="text"
            onChange={onFormChange}
            value={formValues.special}
            id="special-text"
          />
          {errors.special.length > 0 && <div>{errors.special}</div>}
        </label>
        <button type="submit" disabled={disabledButton} id="order-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default OrderForm;