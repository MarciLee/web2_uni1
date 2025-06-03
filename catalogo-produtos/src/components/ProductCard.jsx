import React from 'react';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)' // Sombra W3.CSS
};

const imgContainerStyle = {
  position: 'relative', // Para o botão "Comprar" e tags
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
};

const infoStyle = {
  padding: '10px 16px', // Padding padrão do w3-container
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
};

const titleStyle = {
  fontSize: '1.1em',
  fontWeight: '600', // Um pouco mais de peso
  minHeight: '3.3em', // Aproximadamente 2 linhas com line-height padrão
  marginBottom: '8px',
  lineHeight: '1.5em'
};

const priceStyle = {
  fontSize: '1.25em',
  fontWeight: 'bold',
  color: '#007bff', // Cor de destaque
  margin: '10px 0' // Espaçamento acima e abaixo
};

const buttonContainerStyle = {
  marginTop: 'auto', // Empurra para o final do card
  paddingTop: '10px'
};

function ProductCard({ product }) {
  const imageUrl = product.images && product.images[0] && (product.images[0].startsWith('http://') || product.images[0].startsWith('https://'))
    ? product.images[0]
    : 'https://via.placeholder.com/300x200.png?text=Produto';

  return (
    <div className="w3-col l3 m6 s12 w3-margin-bottom"> {/* Colunas responsivas W3.CSS */}
      <div className="w3-container"> {/* Adiciona padding em volta do card */}
        <div style={cardStyle}> {/* Usando w3-card-4 para efeito de card */}
          <div style={imgContainerStyle}>
            <img
              src={imageUrl}
              alt={product.title || "Imagem do Produto"}
              style={imgStyle}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x200.png?text=Erro";
              }}
            />
            {/* Exemplo de tag (pode adicionar lógica) */}
            {/* <span className="w3-tag w3-display-topleft w3-red w3-padding-small">Promoção</span> */}
            <div className="w3-display-middle w3-display-hover">
              <button className="w3-button w3-black">
                Comprar <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div style={infoStyle}>
            <h3 style={titleStyle}>{product.title || "Título Indisponível"}</h3>
            {/* <p style={descriptionStyle}>
              {product.description && product.description.length > 80
                ? `${product.description.substring(0, 80)}...`
                : product.description || "Descrição não disponível."}
            </p> */}
            <p style={priceStyle}>
              R$ {typeof product.price === 'number' ? product.price.toFixed(2).replace('.', ',') : 'N/A'}
            </p>
            <div style={buttonContainerStyle}>
              <button className="w3-button w3-blue w3-block w3-padding-small">Ver Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;