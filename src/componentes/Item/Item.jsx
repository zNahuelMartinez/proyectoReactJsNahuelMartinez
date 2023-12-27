import ItemCount from "../ItemCount/ItemCount";

const Item = ({producto}) => {
  return (
    <div className="card">
        <img src={producto.imagen} alt={producto.nombre} className="img"/>
        <p>{producto.nombre}</p>
        <p>Stock: {producto.stock}</p>
        <p>Precio: ${producto.precio}</p>
        <ItemCount stock = {producto.stock} onAdd={(contador) => console.log('Se agregaron', contador, producto.nombre, 'al carrito')}/>
    </div>
  )
}

export default Item;