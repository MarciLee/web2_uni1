// src/components/ProductCard.js
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ produto }) => {
  return (
    <div className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p><strong>R$ {produto.preco}</strong></p>
      <small>{produto.categoria}</small>
    </div>
  );
};

export default ProductCard;
