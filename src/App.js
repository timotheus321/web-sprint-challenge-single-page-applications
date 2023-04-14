import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Homepage";
import OrderForm from "./OrderForm";

//navigate = useNavigate();


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Foods</p>
      <div>
      <nav>
        <Link to="/">Home Screen</Link>&nbsp;
        <Link to="pizza">Order Pizza</Link>&nbsp;
        
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<OrderForm />} />
      </Routes>
      </div>
   </>
  );
};
export default App;
