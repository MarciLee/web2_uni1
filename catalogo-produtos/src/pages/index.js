import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('/api/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data.slice(0, 10)));
  }, []);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fff', color: '#000' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Loja Virtual M&Mjr</h1>
      <ProductList produtos={produtos} />
    </div>
  );
}
