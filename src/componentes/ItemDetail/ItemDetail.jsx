import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoNuevo = {...producto, cantidad: contador }
    añadirProducto(productoNuevo)
    setToggle(true);
  };

  return (
    <div className="itemDetailDiv">
      <div className="imagenPosicion">
          <img src={producto.imagen} alt={producto.nombre} className="imgDetail"/>
      </div>
      <div>
        <h3 className="nombreZapa">{producto.nombre}</h3>
        <p>Stock: {producto.stock}</p>
        <p>${producto.precio}</p>
        
        {toggle ? (
        <>
            <Link to="/carrito">
              <button  className="botonTerminarCompra">
                Terminar mi compra
              </button>
            </Link>
            <Link to="/">
              <button className="botonTerminarCompra">
                Seguir comprando
              </button>
            </Link>
          </>
          ) : (
            <ItemCount 
              stock={producto.stock} 
              agregarAlCarrito={agregarAlCarrito}
            />


        )}  
        <p className="descripcion">{producto.descripcion}</p> 
        {/* <ItemCount stock = {producto.stock} onAdd={(contador) => console.log('Se agregaron', contador, producto.nombre, 'al carrito')}/> */}
      </div>
    </div>
  )
}
export default ItemDetail