import React from 'react';
import "./CSS/ProductCard.css"

function ProductCard({ plant, addToCart, cart }) {
  const inCart = cart.some((item) => item.id === plant.id);

  return (
    // <div className="product-card">
    //   <img src={plant.thumbnail} alt={plant.name} />
    //   <h4>{plant.name}</h4>
    //   <p>${plant.price}</p>
    //   <button onClick={() => addToCart({ ...plant, quantity: 1 })} disabled={inCart}>
    //     {inCart ? 'Added' : 'Add to Cart'}
    //   </button>
    // </div>
    <div className="product-card">
    <img src={plant.thumbnail} alt={plant.name} className="product-image" />
    <h4 className="product-name">{plant.name}</h4>
    <p className="product-price">${plant.price}</p>
    <button 
      className={`add-to-cart-btn ${inCart ? 'disabled' : ''}`}
      onClick={() => addToCart({ ...plant, quantity: 1 })}
      disabled={inCart}
    >
      {inCart ? 'Added' : 'Add to Cart'}
    </button>
  </div>
  );
}

export default ProductCard;
