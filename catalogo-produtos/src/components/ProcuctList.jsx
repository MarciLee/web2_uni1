import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12'); // Buscando 12 para preencher 3 ou 4 colunas
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status} - ${response.statusText || 'Erro ao buscar produtos'}`);
        }
        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("A API não retornou um array de produtos.");
        }

        const validProducts = data.filter(
          p => p && p.id && p.title && typeof p.price === 'number' && p.images && p.images.length > 0 && p.images[0]
        );
        setProducts(validProducts);

      } catch (e) {
        console.error("Falha ao buscar produtos:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="w3-container w3-padding-32"><p className="status-message w3-center"><i className="fa fa-spinner w3-spin"></i> Carregando produtos...</p></div>;
  }

  if (error) {
    return <div className="w3-container w3-padding-32"><p className="status-message error-message w3-center">Erro ao carregar produtos: {error}</p></div>;
  }

  if (products.length === 0) {
    return <div className="w3-container w3-padding-32"><p className="status-message w3-center">Nenhum produto encontrado.</p></div>;
  }

  return (
    <div className="w3-container w3-padding-16" id="product-grid-api">
      <div className="w3-row-padding"> {/* w3-row-padding para espaçamento entre colunas */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;