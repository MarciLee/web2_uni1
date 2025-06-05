import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ produtos }) => {
  if (!produtos?.length) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>🔄 Carregando produtos...</p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {produtos.map(produto => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ProductList;
