const ItemDetail = ({producto}) => {
  return (
    <div>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.nombre}</p>
        <p>${producto.precio}</p>
        <p>{producto.descripcion}</p>
    </div>
  )
}
export default ItemDetail