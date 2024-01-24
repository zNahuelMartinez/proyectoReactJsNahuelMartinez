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
            <p>cantidad {producto.cantidad}</p>
            <button onClick={()=> borrarProducto(producto.id)}>Eliminar carrito</button>
          </li>
        ))
      }
      </ul>
      <button onClick={borrarCarrito}>Eliminar carrito</button>
    </div>
  )
}
export default Carrito