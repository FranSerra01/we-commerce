/* eslint-disable no-unused-vars */
/* src\components\common\card\Card.jsx */

// src/components/pages/card/Card.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext"; // Importa el contexto del carrito
import "./card.css";

export const Card = ({ id, image, title, price, model, color, description }) => {
  const { addToCart } = useCart(); // Usa la función addToCart del contexto

  const handleAddToCart = () => {
    const product = { id, image, title, price, model, color, description };
    addToCart(product, 1); // Agrega el producto al carrito con cantidad 1
  };

  return (
    <div className="card">
      <Link to={`/item/${id}`}>
        <img src={image} alt={title} className="cardImage" />
      </Link>
      <div className="cardInfo">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardModel">Modelo: {model}</p>
        <p className="cardColor">Color: {color}</p>
        <p className="cardPrice">${price}</p>
        <Link to={`/item/${id}`}>
          <button className="cardButton">Ver Descripción</button>
        </Link>
        <button className="addToCartButton" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};






