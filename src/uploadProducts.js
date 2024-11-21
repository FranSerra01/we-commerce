// src/scripts/uploadProducts.js

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./products";

const uploadProducts = async () => {
  try {
    const productsCollection = collection(db, "products");

    // Verificar los productos existentes
    const existingDocs = await getDocs(productsCollection);
    const existingIds = existingDocs.docs.map((doc) => doc.data().id);

    // Filtrar los productos que ya existen para evitar duplicados
    const productsToUpload = products.filter(
      (product) => !existingIds.includes(product.id)
    );

    if (productsToUpload.length === 0) {
      console.log("Todos los productos ya están subidos.");
      return;
    }

    // Subir los productos que no existen
    for (const product of productsToUpload) {
      await addDoc(productsCollection, product);
      console.log(`Producto subido: ${product.name}`);
    }

    console.log(`Se subieron ${productsToUpload.length} productos nuevos.`);
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
};

export default uploadProducts;



