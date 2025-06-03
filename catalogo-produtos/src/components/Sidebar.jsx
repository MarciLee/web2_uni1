import React, { useState, useEffect } from 'react';

function Sidebar({ isOpen, onClose, onOpenNewsletter }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = (e) => {
    e.preventDefault();
    setIsAccordionOpen(!isAccordionOpen);
  };

  // Efeito para fechar o accordion se a sidebar for fechada
  useEffect(() => {
    if (!isOpen) {
      setIsAccordionOpen(false);
    }
  }, [isOpen]);

  const sidebarClasses = `w3-sidebar w3-bar-block w3-white w3-collapse w3-top ${isOpen ? 'w3-show-sidebar' : ''}`;
  // 'w3-show-sidebar' pode ser uma classe customizada para garantir display block ou animação
  // Em telas pequenas, o display 'block' é controlado por 'isOpen'
  // Em telas grandes (>992px), w3-collapse já o mantém visível e o 'isOpen' não tem efeito visual direto na sidebar, mas sim no overlay e margem do App.

  const sidebarStyle = {
    zIndex: 3,
    width: '250px',
    display: (isOpen || window.innerWidth > 992) ? 'block' : 'none' // Garante visibilidade em telas grandes ou quando aberto em pequenas
  };
   if (window.innerWidth <= 992 && !isOpen) { // Em telas pequenas, se não estiver aberto, não mostrar.
       sidebarStyle.display = 'none';
   }


  return (
    <nav className={sidebarClasses} style={sidebarStyle} id="mySidebar">
      <div className="w3-container w3-display-container w3-padding-16">
        <i onClick={onClose} className="fa fa-remove w3-hide-large w3-button w3-display-topright w3-transparent w3-hover-red"></i>
        <h3 className="w3-wide"><b>LOGO AQUI</b></h3>
      </div>
      <div className="w3-padding-64 w3-large w3-text-grey" style={{ fontWeight: 'bold' }}>
        <a href="#shirts" onClick={onClose} className="w3-bar-item w3-button w3-hover-light-grey">Shirts</a>
        <a href="#dresses" onClick={onClose} className="w3-bar-item w3-button w3-hover-light-grey">Dresses</a>
        <a onClick={toggleAccordion} href="!#" className="w3-button w3-block w3-white w3-left-align w3-hover-light-grey">
          Jeans <i className={`fa ${isAccordionOpen ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
        </a>
        <div className={`w3-bar-block w3-hide w3-padding-large w3-medium ${isAccordionOpen ? 'w3-show' : ''}`}>
          <a href="#skinny" onClick={onClose} className="w3-bar-item w3-button w3-light-grey w3-hover-grey"><i className="fa fa-caret-right w3-margin-right"></i>Skinny</a>
          <a href="#relaxed" onClick={onClose} className="w3-bar-item w3-button w3-hover-grey">Relaxed</a>
          <a href="#bootcut" onClick={onClose} className="w3-bar-item w3-button w3-hover-grey">Bootcut</a>
          <a href="#straight" onClick={onClose} className="w3-bar-item w3-button w3-hover-grey">Straight</a>
        </div>
        <a href="#jackets" onClick={onClose} className="w3-bar-item w3-button w3-hover-light-grey">Jackets</a>
        <a href="#gymwear" onClick={onClose} className="w3-bar-item w3-button w3-hover-light-grey">Gymwear</a>
      </div>
      <a href="#footer" onClick={onClose} className="w3-bar-item w3-button w3-padding w3-hover-light-grey">Contato</a>
      <a href="!#" onClick={(e) => { e.preventDefault(); onOpenNewsletter(); onClose(); }} className="w3-bar-item w3-button w3-padding w3-hover-light-grey">Newsletter</a>
      <a href="#footer" onClick={onClose} className="w3-bar-item w3-button w3-padding w3-hover-light-grey">Inscrever-se</a>
    </nav>
  );
}

export default Sidebar;