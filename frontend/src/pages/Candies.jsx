import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/db';

function Candies() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dulcería Colombiana</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.candies.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Candies;