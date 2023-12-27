import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({producto}) => {
  return (
    <div className="itemDetailDiv">
        <img src={producto.imagen} alt={producto.nombre} className="imgDetail"/>
        <p>{producto.nombre}</p>
        <p>Stock: {producto.stock}</p>
        <p>${producto.precio}</p>
        <p className="descripcion">{producto.descripcion}</p>
        <ItemCount stock = {producto.stock} onAdd={(contador) => console.log('Se agregaron', contador, producto.nombre, 'al carrito')}/>
    </div>
  )
}
export default ItemDetail