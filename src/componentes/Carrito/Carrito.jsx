import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, precioTotal } =
    useContext(CartContext);

  return (
    <div>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} style={{ width: "150px" }} alt="" />
            <p>{producto.nombre}</p>
            <p>$: {producto.precio * producto.cantidad}</p>
            <p>Cantidad {producto.cantidad}</p>
            <button onClick={() => borrarProducto(producto.id)}>
              Eliminar producto
            </button>
          </li>
        ))}
      </ul>
      <h4>Precio total:{precioTotal()}</h4>
      <button onClick={borrarCarrito}>Eliminar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
export default Carrito;
