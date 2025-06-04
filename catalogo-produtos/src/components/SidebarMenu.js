import React, { useState } from 'react';
import styles from '../styles/SidebarMenu.module.css';

const SidebarMenu = () => {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <div className={styles.hamburguer} onClick={() => setAberto(!aberto)}>
        ☰
      </div>

      <div className={`${styles.sidebar} ${aberto ? styles.aberto : ''}`}>
        <button className={styles.closeBtn} onClick={() => setAberto(false)}>✖</button>
        <h2>Menu</h2>
        <ul>
          <li><a href="#">🏠 Início</a></li>
          <li><a href="#">🛍 Catálogo</a></li>
          <li><a href="#">📦 Pedidos</a></li>
          <li><a href="#">⚙️ Configurações</a></li>
        </ul>
      </div>
    </>
  );
};

export default SidebarMenu;
