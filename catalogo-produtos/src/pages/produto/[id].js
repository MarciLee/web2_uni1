import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/ProductCard.module.css';
import Head from 'next/head';

export default function DetalheProduto() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('/api/produtos')
        .then(res => res.json())
        .then(data => {
          const encontrado = data.find(p => p.id == id);
          setProduto(encontrado);
        });
    }
  }, [id]);

  if (!produto) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Carregando...</p>;

  return (
    <>
      <Head>
        <title>{produto.nome} | Loja Virtual M&Mjr</title>
      </Head>

      <header style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1 style={{ color: '#111', fontSize: '2rem' }}>Loja Virtual M&Mjr</h1>
        <button
          onClick={() => router.push('/')}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Voltar para a Home
        </button>
      </header>

      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        <div className={styles.card}>
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p><strong>R$ {produto.preco}</strong></p>
          <p style={{ margin: '10px 0' }}>{produto.descricao || 'Sem descrição.'}</p>
          <small>{produto.categoria}</small>
        </div>
      </div>
    </>
  );
}
