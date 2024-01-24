import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Carrito = () => {
  const {carrito, borrarCarrito, borrarProducto} = useContext(CartContext)

  return (
    <div>
      <ul>
      {
        carrito.map((producto)=>(
          <li key={producto.id}>
            <img src={producto.imagen} style={{width:"150px"}} alt="" />
            <p>{producto.nombre}</p>
            <p>$: {producto.precio}</p>
            <p>Cantidad {producto.cantidad}</p>
            <button onClick={()=> borrarProducto(producto.id)}>Eliminar producto</button>
          </li>
        ))
      }
      </ul>
      <h4>Precio total:</h4>
      <button onClick={borrarCarrito}>Eliminar carrito</button>
    </div>
  )
}
export default Carrito