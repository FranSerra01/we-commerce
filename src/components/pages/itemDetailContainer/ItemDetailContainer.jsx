// src/components/pages/itemDetailContainer/ItemDetailContainer.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import ItemDetail from "./ItemDetail";
import "./itemDetail.css";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, "products", itemId);
      const res = await getDoc(productDoc);

      if (res.exists()) {
        setProduct({ id: res.id, ...res.data() });
      } else {
        console.error("Producto no encontrado");
      }
    };

    fetchProduct();
  }, [itemId]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="itemDetailContainer">
      <ItemDetail product={product} />
    </div>
  );
};







