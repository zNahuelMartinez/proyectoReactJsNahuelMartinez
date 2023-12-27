import { useState, useEffect } from "react";
import EjemploTitulo from "./EjemploTitulo";

const EjemploContador = () => {
  console.log("Se monto o se actualizo el componente");
  //hook de estado: useState o variable de estado
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const alternarToggle = ()=>{
    //guarda el valor contrario al actual
    setToggle(!toggle);
  }
  
  //Solo se ejecuta al montar el componente
  //sirve para: llamadas a apis o subscripciones a eventlistner
  useEffect(()=>{
    console.log("1er useEffect")
  }, [])
  

  //este useEfect se ejecuta en el montaje y cada vez que el contador se actualice 
  //se usa para: realizar acciones especificas cuando una variable dependiente cambie
  useEffect(()=>{
    console.log("2er useEffect")
  }, [contador])


  //se ejecuta en el montaje y cada vez que se actualice cualquier estado del componente
  //se puede usar en operaciones globales de monitoreo o registro y tambien para actualizaciones generales del proyecto
  useEffect(()=>{
    console.log("3er useEffect")
  },)


  return (
    <div>
        <div className="contador">
            <p>Contador: {contador}</p>
            <button onClick={aumentar} className="boton">+</button>
        </div>
        <div className="contador">
            <p>Booleano: {toggle.toString()}</p>
            <button onClick={alternarToggle}>Alternar Toggle</button>
            {
                toggle && <EjemploTitulo/>
            }
        </div>
    </div>
  );
};

export default EjemploContador;