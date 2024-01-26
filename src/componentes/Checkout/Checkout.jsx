import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    celular: "",
    email: "",
    emailRepetido: "",
  });
  const [idOrden, setIdOrden] = useState(null);

  const guardarDatosInput = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  const { carrito, precioTotal, borrarCarrito } = useContext(CartContext);

  const enviarOrden = (e) => {
    e.preventDefault();
    if (datosForm.email === datosForm.emailRepetido) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: precioTotal(),
      };

      subirOrden(orden);
    } else {
      alert("Los emails deben ser identicos"); //usar sweet alert o tostify
    }
  };

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id);
      //limpiar el carrito despues de finalizar la compra
      borrarCarrito();
    });
  };

  return (
    <div>
      {idOrden ? (
        <div>
          <h2>Orden Generada correctamente</h2>
          <p> Numero de Orden: {idOrden} </p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};
export default Checkout;
