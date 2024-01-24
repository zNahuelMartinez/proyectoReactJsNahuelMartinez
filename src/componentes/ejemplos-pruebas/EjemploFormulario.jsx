import { useState } from "react"

const EjemploFormulario = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")

    const cambiarNombre = (e)=>{
        setNombre(e.target.value)
    }

    const cambiarDireccion = (e)=>{
        setDireccion(e.target.value)
    }

    const cambiarEmail = (e)=>{
        setEmail(e.target.value)
    }

    const enviarFormulario = (e)=>{
        e.preventDefault()
        const usuario = {nombre, direccion, email}
        console.log(usuario)
    }

  return (
    <form onSubmit={enviarFormulario} style={{padding: "100px"}}>
        <label htmlFor="">
            Nombre: <input type="text" value={nombre} onChange={cambiarNombre}/>
        </label>
        <label htmlFor="">
            Direccion: <input type="text" value={direccion} onChange={cambiarDireccion}/>
        </label>
        <label htmlFor="">
            Email: <input type="email" value={email} onChange={cambiarEmail}/>
        </label>
        <button type="submit">Enviar</button>
    </form>
  )
}
export default EjemploFormulario