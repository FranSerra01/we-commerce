// src/components/pages/cart/Cart.jsx

// src/components/pages/cart/Cart.jsx

import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom"; // Importa Link
import "./cart.css";

export const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateCartItemQuantity,
    cartTotal,
    totalItems,
  } = useCart();

  const handleIncrement = (id) => {
    updateCartItemQuantity(id, 1);
  };

  const handleDecrement = (id) => {
    updateCartItemQuantity(id, -1);
  };

  return (
    <div className="cartContainer">
      <h2>Carrito de Compras</h2>

      {cartItems.length > 0 ? (
        <>
          {/* Mostrar total de productos y total a pagar */}
          <div className="cartSummary">
            <p>
              <strong>Total de productos:</strong> {totalItems}
            </p>
            <p>
              <strong>Total a pagar:</strong> ${cartTotal.toFixed(2)}
            </p>
          </div>

          {/* Mostrar cada producto del carrito */}
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <img
                src={item.image}
                alt={item.title}
                className="cartItemImage"
              />
              <div className="cartItemDetails">
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="removeButton"
                  onClick={() => removeFromCart(item.id)}
                >
                  Quitar del carrito
                </button>
                <button
                  className="counterButton"
                  onClick={() => handleIncrement(item.id)}
                >
                  Sumar
                </button>
                <button
                  className="counterButton"
                  onClick={() => handleDecrement(item.id)}
                >
                  Restar
                </button>
              </div>
            </div>
          ))}

          {/* Botón para ir al checkout */}
          <div className="checkoutButtonContainer">
            <Link to="/checkout">
              <button className="checkoutButton">Ir al Checkout</button>
            </Link>
          </div>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};







