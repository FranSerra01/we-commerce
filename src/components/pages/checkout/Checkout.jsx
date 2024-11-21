// src/components/pages/checkout/Checkout.jsx

import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./checkout.css";

export const Checkout = () => {
  const { cartItems, cartTotal } = useCart(); // Trae los productos del carrito y el total
  const navigate = useNavigate(); // Para redirigir después de enviar el formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para evitar múltiples envíos
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Preparar el objeto de la orden
  const order = {
    buyer: formData,
    items: cartItems.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
    total: cartTotal,
    date: new Date().toISOString(), // Fecha de la orden
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Desactivar el botón mientras se envía
    setErrorMessage("");

    try {
      // Referencia a la colección de órdenes en Firestore
      const ordersCollection = collection(db, "orders");

      // Subir la orden a Firestore
      const docRef = await addDoc(ordersCollection, order);
      console.log("Orden registrada con ID:", docRef.id);

      // Redirigir a la página de agradecimiento
      navigate("/thankyou");
    } catch (error) {
      console.error("Error al registrar la orden:", error);
      setErrorMessage("Hubo un problema al procesar tu pedido. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false); // Reactivar el botón
    }
  };

  return (
    <div className="checkoutContainer">
      <h2>Formulario de Checkout</h2>
      <form className="checkoutForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="checkoutSubmitButton"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}

      <div className="cartSummary">
        <h3>Resumen del Carrito</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="cartSummaryItem">
            <p>{item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ))}

        <div className="cartTotal">
          <h3>Total de la compra</h3>
          <p>${cartTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};


