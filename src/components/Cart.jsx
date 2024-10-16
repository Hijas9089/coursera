import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './CSS/Cart.css'

function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
      ) : (
        <div>
          {cart.map((plant) => (
            <CartItem
              key={plant.id}
              plant={plant}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
