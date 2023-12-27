import { useEffect, useState } from "react"
import obtenerProductos from "../utilidades/data"
import ItemList from "../ItemList/itemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoria } = useParams()

    useEffect(()=>{
        obtenerProductos
        .then((respuesta)=>{
            if(categoria){
                const productoFiltrado = respuesta.filter((producto)=> producto.categoria === categoria)
                setProductos(productoFiltrado)
            }
            else{
                setProductos(respuesta)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Finalizo la promesa")
        })
    }, [categoria])

    return(
        <div id="itemListContainer">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;