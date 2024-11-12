import React, { useState } from 'react';
import './produtos.scss';
import bolo from '../image/bolo.jpeg';
import chocolate from '../image/bolo da vo do break.jpg';
import individuais from '../image/Doces Individuais.jpg';
import combo from '../image/Combo de Festas.jpg';







const products = [
  {
    id: 1,
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com recheio cremoso.',
    price: 95.00,
    image: chocolate,
    type: 'bolo',
  },
  {
    id: 2,
    name: 'Bolo de Baunilha',
    description: 'Bolo leve de baunilha com cobertura de chantilly.',
    price: 60.00,
    image: bolo,
    type: 'bolo',
  },
  {
    id: 3,
    name: 'Doces Individuais',
    description: 'Uma seleção de doces variados para você saborear.',
    price: 90.00,
    image: individuais,
    type: 'doce',
  },
  {
    id: 4,
    name: 'Combo de Festas',
    description: 'Bolo + 12 doces individuais a um preço especial.',
    price: 70.00,
    image: combo,
    type: 'combo',
  },
  {
    id: 1,
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com recheio cremoso.',
    price: 95.00,
    image: chocolate,
    type: 'bolo',
  },
  {
    id: 2,
    name: 'Bolo de Baunilha',
    description: 'Bolo leve de baunilha com cobertura de chantilly.',
    price: 60.00,
    image: bolo,
    type: 'bolo',
  },
  {
    id: 3,
    name: 'Doces Individuais',
    description: 'Uma seleção de doces variados para você saborear.',
    price: 90.00,
    image: individuais,
    type: 'doce',
  },
  {
    id: 4,
    name: 'Combo de Festas',
    description: 'Bolo + 12 doces individuais a um preço especial.',
    price: 70.00,
    image: combo,
    type: 'combo',
  },
  {
    id: 3,
    name: 'Doces Individuais',
    description: 'Uma seleção de doces variados para você saborear.',
    price: 90.00,
    image: individuais,
    type: 'doce',
  },
  {
    id: 4,
    name: 'Combo de Festas',
    description: 'Bolo + 12 doces individuais a um preço especial.',
    price: 70.00,
    image: combo,
    type: 'combo',
  },
  {
    id: 4,
    name: 'Combo de Festas',
    description: 'Bolo + 12 doces individuais a um preço especial.',
    price: 70.00,
    image: combo,
    type: 'combo',
  },
  {
    id: 3,
    name: 'Doces Individuais',
    description: 'Uma seleção de doces variados para você saborear.',
    price: 90.00,
    image: individuais,
    type: 'doce',
  },

];

const Products = () => {
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: parseInt(value) });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const newItem = { ...product, quantity };

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingProduct) {
        
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
      
        updatedCart = [...prevCart, newItem];
      }

      
      const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(newTotal);

      return updatedCart;
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("O carrinho está vazio.");
      return;
    }

    alert(`Compra concluída! Total: R$ ${total.toFixed(2)}`);
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="products-container">

      <h1>Nosso Cardápio de Produtos</h1>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">R$ {product.price.toFixed(2)}</p>
            
            <label>
              Quantidade:
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />
            </label>
            
            {product.type === 'bolo' && (
              <>
                <label>
                  Peso (kg):
                  <input type="number" min="1" placeholder="Peso" />
                </label>
                <label>
                  Cor do Bolo:
                  <input type="text" placeholder="Ex: Vermelho" />
                </label>
              </>
            )}
            
            {product.type === 'doce' && (
              <label>
                Tipo de Doce:
                <input type="text" placeholder="Ex: Brigadeiro" />
              </label>
            )}
            
            <div className="button-container">
         
              <button className="add-button" onClick={() => handleAddToCart(product)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>



        ))}
      </div>

      <div className="cart-container">
        <h2>Carrinho</h2>
        {cart.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantidade: {item.quantity} - Preço: R$ {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button onClick={handleCheckout} disabled={cart.length === 0}>
          Concluir Compra
        </button>
      </div>


    </div>
  );
};

export default Products;
