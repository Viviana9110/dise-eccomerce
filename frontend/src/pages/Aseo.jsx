import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/db';
const Aseo = () => {
    return (
        <div>
          <h1 className="text-3xl font-bold mb-6">Aseo</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.aseo.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
}

export default Aseo