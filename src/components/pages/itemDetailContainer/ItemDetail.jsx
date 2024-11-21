/* eslint-disable no-unused-vars */
// src/components/pages/itemDetailContainer/ItemDetail.jsx
import Counter from "../../common/counter/Counter";
import { useCart } from "../../../context/CartContext";
import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart(); // Usa la función addToCart del contexto

  const handleAddToCart = () => {
    addToCart(product, 1); // Agrega el producto al carrito con cantidad 1
  };

  return (
    <div className="itemDetail">
      <h2 className="itemDetailTitle">{product.name}</h2>
      <img src={product.image} alt={product.name} className="itemDetailImage" />
      <p className="itemDetailPrice">Precio: ${product.price}</p>
      <p className="itemDetailInfo">Modelo: {product.model}</p>
      <p className="itemDetailInfo">Color: {product.color}</p>
      <p className="itemDetailInfo">Sistema Operativo: {product.operatingSystem}</p>
      <p className="itemDetailInfo">Almacenamiento: {product.storage}</p>
      <p className="itemDetailDescription">{product.description}</p>
      <button className="addToCartButton" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;




