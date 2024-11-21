// src/components/pages/itemListContainer/ItemListContainer.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../common/card/Card";
import { db } from "../../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const productsCollection = collection(db, "products");
        let q;

        // Filtrar por categoría si hay un categoryId, de lo contrario traer todo
        if (categoryId) {
          q = query(productsCollection, where("category", "==", categoryId));
        } else {
          q = query(productsCollection);
        }

        const querySnapshot = await getDocs(q);
        const productsArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFilteredProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      {loading ? (
        <p>Cargando productos...</p>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            model={product.model}
            color={product.color}
            description={product.description}
          />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};




