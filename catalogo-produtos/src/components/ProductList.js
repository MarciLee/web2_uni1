// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ produtos }) => {
  if (!produtos?.length) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.5rem'
    }}>
      {produtos.map(prod => (
        <ProductCard key={prod.id} produto={prod} />
      ))}
    </div>
  );
};

export default ProductList;
