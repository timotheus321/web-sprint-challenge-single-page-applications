import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Pizza Shop</h1>
      <Link id="order-pizza" to="/pizza">Order Pizza</Link>
    </div>
  );
}

export default HomePage;
