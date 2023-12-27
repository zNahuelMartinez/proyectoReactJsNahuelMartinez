import { useEffect, useState } from "react"
import obtenerProductos from "../utilidades/data"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState();

    useEffect(() => {
        obtenerProductos
            .then((respuesta) => {
                const productoEncontrado = respuesta.find((prod) => prod.id === "asdq1");
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
