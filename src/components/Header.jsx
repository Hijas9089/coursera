import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Header.css'

function Header({ cart }) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    // <header>
    //   <h1>Plant Shop</h1>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/cart">Cart ({cartCount})</Link>
    //   </nav>
    // </header>
    <header className="header">
      <div className="logo">
        <h1>Plant Shop</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
