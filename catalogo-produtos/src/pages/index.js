import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('/api/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛒 Catálogo de Produtos (API Platzi)</h1>
      <ProductList produtos={produtos} />
    </div>
  );
}