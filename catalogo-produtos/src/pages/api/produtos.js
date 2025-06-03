import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=12');

    const dados = response.data.map(prod => ({
      id: prod.id,
      nome: prod.title,
      imagem: prod.images[0],
      preco: prod.price,
      categoria: prod.category?.name || 'Sem categoria'
    }));

    res.status(200).json(dados);
  } catch (error) {
    console.error("Erro na API:", error.message);
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
}
