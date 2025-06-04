// src/components/ProductList.js
import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

const ProductList = ({ produtos }) => {
  if (!produtos?.length) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>🔄 Carregando produtos...</p>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const gruposDe10 = [];
  for (let i = 0; i < produtos.length; i += 2) {
    gruposDe10.push(produtos.slice(i, i + 2));
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '2rem' }}>
      <Slider {...settings}>
        {gruposDe10.map((grupo, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {grupo.map((produto) => (
              <div key={produto.id} style={{ width: 'calc(100% - 2rem)' }}>
                <ProductCard produto={produto} />
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
