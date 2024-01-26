import { useContext, useState } from "react"
import Form  from "./Form"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import db from "../../db/db"

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        celular: "",
        email: ""
    })
    const  [idOrden, setIdOrden] = useState(null)

    const guardarDatosInput = (e)=>{
        setDatosForm({...datosForm, [e.target.name]: e.target.value})
    }

    const {carrito, precioTotal, borrarCarrito} = useContext(CartContext)

    const enviarOrden = (e)=>{
        e.preventDefault()
        const orden = {
            comprador: {...datosForm},
            productos: [...carrito],
            total: precioTotal()
        }

        subirOrden(orden)
    }

    const subirOrden = (orden)=>{
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((respuesta)=>{
                setIdOrden(respuesta.id)
                //limpiar el carrito despues de finalizar la compra
                borrarCarrito()
            })
    }


  return (
    <div>
        {idOrden ? (
            <div>
                <h2>Orden Generada correctamente</h2>
                <p> Numero de Orden: {idOrden} </p>
            </div>
        ) :
        (
        <Form 
            datosForm={datosForm} 
            guardarDatosInput={guardarDatosInput} 
            enviarOrden={enviarOrden} 
        />

        )}
    </div>
  )
}
export default Checkout