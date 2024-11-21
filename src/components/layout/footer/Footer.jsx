/* src\components\layout\footer\Footer.jsx */

import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h4>Sobre Nosotros</h4>
          <p>Somos una tienda comprometida con ofrecer los mejores productos para nuestros clientes.</p>
        </div>
        
        <div className="footerSection">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/about">Nosotros</a></li>
            <li><a href="/shop">Tienda</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footerSection">
          <h4>Redes Sociales</h4>
          <div className="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} We import. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}


