import { useEffect, useState } from "react"
import obtenerProductos from "../utilidades/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        obtenerProductos
            .then((respuesta) => {
                const productoEncontrado = respuesta.find((prod) => prod.id === id);
                setProducto(productoEncontrado);
            });
    }, []);

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    );
};
export default ItemDetailContainer;
