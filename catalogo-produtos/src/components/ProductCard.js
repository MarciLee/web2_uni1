import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ produto }) => {
  return (
    <Link href={`/produto/${produto.id}`} className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p><strong>R$ {produto.preco}</strong></p>
      <small>{produto.categoria}</small>
    </Link>
  );
};

export default ProductCard;
