import React from 'react';

function CartItem({ plant, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={plant.thumbnail} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>${plant.price}</p>
      <p>Quantity: {plant.quantity}</p>
      <button onClick={() => increaseQuantity(plant.id)}>Increase</button>
      <button onClick={() => decreaseQuantity(plant.id)}>Decrease</button>
      <button onClick={() => removeFromCart(plant.id)}>Delete</button>
    </div>
  );
}

export default CartItem;
