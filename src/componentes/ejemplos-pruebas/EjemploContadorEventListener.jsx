import { useEffect, useState } from "react"

const EjemploContadorEventListener = () => {

    const [contador, setContador] = useState(1)

    useEffect(()=>{
      const botonSumar = document.getElementById("sumar")

      const handleClick = () =>{
        setContador (contador + 1)
      }

      botonSumar.addEventListener("click", handleClick)

      return ()=>{
        botonSumar.removeEventListener("click", handleClick)
      }

    },[contador])
    
  return (
    <div>
        <p>{contador}</p>
        <button id="sumar">+</button>
    </div>
  )
}
export default EjemploContadorEventListener