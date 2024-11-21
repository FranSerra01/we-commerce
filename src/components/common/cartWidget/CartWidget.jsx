/* src\components\common\carrito\Carrito.jsx */

import './cartWidget.css';
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext"; // Importar el contexto del carrito

export const CartWidget = () => {
  const { totalItems } = useCart(); // Obtener el total de items del contexto

  return (
    <Link to="/cart">
      <div className="cartWidget">
        <IoMdCart className="cartIcon" />
        <span className="itemCount">{totalItems}</span> {/* Mostrar totalItems */}
      </div>
    </Link>
  );
};


