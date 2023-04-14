import React from 'react';
/*   √ Homepage at "/" route, has link or button with #order-pizza (37 ms)                                                                 
    √ From homepage "/" route, click #order-pizza, navigate to "/pizza" route (30 ms)                                                     
    √ The "/pizza" route has a form with #pizza-form (6 ms)          
    × Form has name text input with #name-input (9 ms)               
    × Form has validation for #name-input with error message "name must be at least 2 characters" (15 ms)                                 
    × Form has pizza size dropdown with #size-dropdown (14 ms)       
    × Form has toppings checklist with at least 4 options (10 ms)    
    × Form has special instructions input with #special-text (8 ms)  
    × Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders (131 ms) 
         
   
    const initialFormValues = 
    name: string,
    size: string,
    topping1: bool,
    topping2: bool,
    special: string,
    */

function OrderForm() {
  return (
    <div>
      <h2>Order Your Pizza</h2>
      <form id="pizza-form">
        <label>
          <input id="name-input"></input>
        </label>
      </form>
    </div>
  );
}

export default OrderForm;