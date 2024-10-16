import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Fern', price: 10, category: 'Indoor', thumbnail: 'fern.jpg' },
  { id: 2, name: 'Cactus', price: 15, category: 'Succulent', thumbnail: 'cactus.jpg' },
  { id: 3, name: 'Snake Plant', price: 20, category: 'Indoor', thumbnail: 'snakeplant.jpg' },
  { id: 4, name: 'Bonsai', price: 25, category: 'Outdoor', thumbnail: 'bonsai.jpg' },
  { id: 5, name: 'Aloe Vera', price: 8, category: 'Succulent', thumbnail: 'aloe.jpg' },
  { id: 6, name: 'Rosemary', price: 12, category: 'Herb', thumbnail: 'rosemary.jpg' },
];

function Productlist({ addToCart, cart }) {
  return (
    <div>
      <h2>Our Plants</h2>
      <div className="categories">
        <h3>Indoor Plants</h3>
        {products.filter(p => p.category === 'Indoor').map((plant) => (
          <ProductCard key={plant.id} plant={plant} addToCart={addToCart} cart={cart} />
        ))}
        <h3>Succulents</h3>
        {products.filter(p => p.category === 'Succulent').map((plant) => (
          <ProductCard key={plant.id} plant={plant} addToCart={addToCart} cart={cart} />
        ))}
        <h3>Outdoor Plants</h3>
        {products.filter(p => p.category === 'Outdoor').map((plant) => (
          <ProductCard key={plant.id} plant={plant} addToCart={addToCart} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default Productlist;
