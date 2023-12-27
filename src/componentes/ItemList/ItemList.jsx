import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="itemList">
        {
        productos.map((producto)=>(
            <Item producto={producto} key={producto.id}/>
        ))
    }
    </div>
  )
}

export default ItemList;