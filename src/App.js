import React, { useState } from 'react';
import Header from './components/Header';
// import Productlist from './components/Productlist';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productlist from './components/Productlist';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  const removeFromCart = (plantId) => {
    setCart(cart.filter((item) => item.id !== plantId));
  };

  const increaseQuantity = (plantId) => {
    setCart(
      cart.map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (plantId) => {
    setCart(
      cart.map((item) =>
        item.id === plantId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <div>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Productlist addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

