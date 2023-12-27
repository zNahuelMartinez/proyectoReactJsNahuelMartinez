import { useEffect, useState } from "react"
import obtenerProductos from "../utilidades/data"
import ItemList from "../ItemList/itemList"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        obtenerProductos
        .then((respuesta)=>{
            setProductos(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Finalizo la promesa")
        })
    }, [])

    return(
        <div id="itemListContainer">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;