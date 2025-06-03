import React, { useState, useEffect } from 'react';
import './App.css'; // Estilos específicos do App
import './index.css'; // Estilos globais (se você separou)
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);

  const updateMedia = () => {
    setIsLargeScreen(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  // Se a tela for grande, a sidebar pode ser considerada "aberta" para layout,
  // mas o overlay e o botão de fechar só aparecem se explicitamente aberta em tela pequena.
  const effectiveSidebarOpen = isSidebarOpen || (isLargeScreen);


  const w3_open_sidebar = () => setIsSidebarOpen(true);
  const w3_close_sidebar = () => setIsSidebarOpen(false);

  const openNewsletterModal = () => setIsNewsletterModalOpen(true);
  const closeNewsletterModal = () => setIsNewsletterModalOpen(false);

  const mainContentClass = isLargeScreen ? (isSidebarOpen ? 'w3-main-shifted' : 'w3-main-normal') : 'w3-main-normal';


  return (
    <div className="app-content">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={w3_close_sidebar} 
        onOpenNewsletter={openNewsletterModal} 
      />

      {isSidebarOpen && !isLargeScreen && (
        <div
          className="app-overlay w3-hide-large" // w3-hide-large para garantir que não apareça em telas grandes
          onClick={w3_close_sidebar}
          style={{ cursor: 'pointer' }}
          title="Fechar menu lateral"
        ></div>
      )}
      
      <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
        <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
        <a href="!#" onClick={(e) => {e.preventDefault(); w3_open_sidebar();}} className="w3-bar-item w3-button w3-padding-24 w3-right">
          <i className="fa fa-bars"></i>
        </a>
      </header>

      <div className={`w3-main ${mainContentClass}`} >
        <div className="w3-hide-large" style={{ marginTop: '83px' }}></div>

        <header className="w3-container w3-xlarge w3-padding-16">
          <p className="w3-left">Nossos Produtos</p>
          <p className="w3-right">
            <i className="fa fa-shopping-cart w3-margin-right w3-text-grey w3-hover-text-black" style={{cursor: 'pointer'}}></i>
            <i className="fa fa-search w3-text-grey w3-hover-text-black" style={{cursor: 'pointer'}}></i>
          </p>
        </header>

        <div className="w3-display-container w3-container">
          <img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Promoção Jeans" style={{ width: '100%', filter: 'brightness(0.7)' }} />
          <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
            <h1 className="w3-jumbo w3-hide-small">Novas Coleções</h1>
            <h1 className="w3-hide-large w3-hide-medium" style={{fontSize: '2.5em'}}>Novas Coleções</h1>
            <h1 className="w3-hide-small w3-opacity">VERÃO 2025</h1>
            <p><a href="#product-grid-api" className="w3-button w3-black w3-padding-large w3-large w3-hover-opacity-off">VER AGORA</a></p>
          </div>
        </div>
        
        <ProductList />

        <div className="w3-container w3-black w3-padding-32 w3-margin-top">
          <h2 className="w3-wide">NEWSLETTER</h2>
          <p>Receba nossas novidades e ofertas especiais diretamente no seu e-mail!</p>
          <p><input className="w3-input w3-border" type="text" placeholder="Digite seu e-mail" style={{ width: '100%' }} /></p>
          <button type="button" className="w3-button w3-red w3-margin-bottom w3-hover-opacity-off">Inscrever</button>
        </div>

        <footer className="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
          <div className="w3-row-padding">
            <div className="w3-col s4">
              <h4>Contato</h4>
              <p>Dúvidas? Entre em contato.</p>
              {/* Formulário de contato simplificado */}
              <p>contato@minhaloja.com</p>
            </div>
            <div className="w3-col s4">
              <h4>Sobre Nós</h4>
              <p><a href="#about" className="w3-hover-text-black">Nossa História</a></p>
              <p><a href="#support" className="w3-hover-text-black">Suporte</a></p>
            </div>
            <div className="w3-col s4 w3-justify">
              <h4>Loja</h4>
              <p><i className="fa fa-fw fa-map-marker"></i> Nome da Empresa</p>
              <p><i className="fa fa-fw fa-phone"></i> (00) 12345-6789</p>
              <p><i className="fa fa-fw fa-envelope"></i> email@exemplo.com</p>
            </div>
          </div>
          <div className="w3-black w3-center w3-padding-24 w3-margin-top">
            Desenvolvido com <i className="fa fa-heart w3-text-red"></i> usando React & W3.CSS
          </div>
        </footer>
      </div>

      {isNewsletterModalOpen && (
        <div className="w3-modal" style={{ display: 'block', paddingTop: '50px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <div className="w3-modal-content w3-animate-zoom w3-card-4" style={{ maxWidth: '500px', borderRadius: '4px'}}>
            <div className="w3-container w3-white w3-padding-large w3-center">
              <span onClick={closeNewsletterModal} className="w3-button w3-display-topright w3-transparent w3-hover-red" style={{fontSize: '24px'}}>&times;</span>
              <h2 className="w3-wide w3-padding-16">INSCREVA-SE</h2>
              <p>Fique por dentro das novidades e ofertas especiais.</p>
              <p><input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Digite seu e-mail" /></p>
              <button type="button" className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom w3-hover-opacity-off" onClick={closeNewsletterModal}>
                Quero Receber!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;