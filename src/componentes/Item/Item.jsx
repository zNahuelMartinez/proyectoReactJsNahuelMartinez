import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";

const Item = ({producto}) => {
  return (
    <div className="card">
        <img src={producto.imagen} alt={producto.nombre} className="img"/>
        <p>{producto.nombre}</p>
        <p>Stock: {producto.stock}</p>
        <p>Precio: ${producto.precio}</p>
        <Link to={`/detalle/${producto.id}`} className="link"><button className="botonDetalles">Detalles</button></Link>
        <ItemCount stock = {producto.stock} onAdd={(contador) => console.log('Se agregaron', contador, producto.nombre, 'al carrito')}/>
    </div>
  )
}

export default Item;