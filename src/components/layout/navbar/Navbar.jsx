/* src\components\layout\navbar\Navbar.jsx */

import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <div className="logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/drj90xkqr/image/upload/v1730686131/Recurso_2_n0zdvl.png" alt="Logo" />
        </Link>
      </div>

      <ul className="navMenu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/iphone">iPhone</Link></li>
        <li><Link to="/category/samsung">Samsung</Link></li>
        <li><Link to="/category/google">Google</Link></li>
        <li><Link to="/category/oneplus">OnePlus</Link></li>
        <li><Link to="/category/sony">Sony</Link></li>
        <li><Link to="/category/xiaomi">Xiaomi</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};


