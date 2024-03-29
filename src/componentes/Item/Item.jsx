import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  const estiloCard = {
    transform: zoom ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      style={estiloCard}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="card"
    >
      <img src={producto.imagen} alt={producto.nombre} className="img" />
      <p>{producto.nombre}</p>
      <p>Stock: {producto.stock}</p>
      <p>Precio: ${producto.precio}</p>
      <Link to={`/detalle/${producto.id}`} className="link">
        <button className="botonDetalles">Ver detalles</button>
      </Link>
    </div>
  );
};

export default Item;
