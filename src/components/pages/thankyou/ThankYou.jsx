import { Link } from "react-router-dom";
import "./thankyou.css"; // Importamos el CSS que diseñaremos

function ThankYouPage() {
  return (
    <div className="thankYouContainer">
      <div className="thankYouIcon">🎉</div>
      <h2 className="thankYouTitle">¡Gracias por tu compra!</h2>
      <p className="thankYouMessage">
        Tu pedido ha sido procesado con éxito. Pronto recibirás un correo con los detalles de tu compra.
      </p>
      <Link to="/">
        <button className="returnButton">Volver al inicio</button>
      </Link>
    </div>
  );
}

export default ThankYouPage;
