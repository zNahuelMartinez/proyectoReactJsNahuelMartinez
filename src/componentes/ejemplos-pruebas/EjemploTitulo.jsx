import { useEffect } from "react"

const EjemploTitulo = () => {

    useEffect(()=>{

        //Declaramos controlador del evento
        const mostrarAnchoVentana = ()=>{
            console.log("Ancho: ", window.innerWidth)
        }
        
        //declarando el evento a escuchar
        window.addEventListener('resize', mostrarAnchoVentana);

        //Eliminamos el evento al desmontar el componente para evitar que se acumulen  
        return ()=>{
            window.removeEventListener('resize', mostrarAnchoVentana)
        }
    }, [])

  return (
    <div><p>Soy un titulo</p></div>
  )
}

export default EjemploTitulo