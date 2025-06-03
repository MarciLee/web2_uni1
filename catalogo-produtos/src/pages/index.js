import { useEffect, useState } from 'react';

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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem'
      }}>
        {produtos.map(prod => (
          <div key={prod.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <img src={prod.imagem} alt={prod.nome} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{prod.nome}</h3>
            <p><strong>R$ {prod.preco}</strong></p>
            <small>{prod.categoria}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
