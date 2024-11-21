// src/components/common/counter/Counter.jsx
// src/components/common/counter/Counter.jsx
import { useState } from 'react';
import './Counter.css';
import { useCart } from "../../../context/CartContext";

const Counter = ({ product }) => {
  const [count, setCount] = useState(1); // Inicia en 1
  const { addToCart } = useCart(); // Usa las funciones del contexto

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: count }); // Pasa la cantidad correcta
  };

  return (
    <div className="counterContainer">
      <h2 className="counterTitle">Cantidad: {count}</h2>
      <button className="counterButton" onClick={increment}>Sumar</button>
      <button className="counterButton" onClick={decrement}>Restar</button>
      <button className="counterButton" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;



