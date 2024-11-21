/* src\App.jsx */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import { Footer } from "./components/layout/footer/Footer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/pages/cart/Cart";
import { Checkout } from "./components/pages/checkout/Checkout";
import ThankYouPage from "./components/pages/thankyou/ThankYou";
import uploadProducts from "./uploadProducts";

function App() {
  
  uploadProducts();
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;






