import { useEffect } from "react";
import { createContext, useState } from "react";

//Creamos un contexto llamado CartContext
const CartContext = createContext()
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
//Creamos el componente CartProvider
//Sirve de proveedor del contexto
const CartProvider = ({children})=>{
    const [carrito, setCarrito] = useState(carritoInicial);
    
    console.log(carrito)
    const añadirProducto = (producto)=>{
        const condicion = estaEnElCarrito(producto.id)
        if(condicion){
            const productosModificados = carrito.map((productoCarrito)=>{
                if(productoCarrito.id === producto.id){
                    return{ ...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad}
                }
            })

            setCarrito(productosModificados)
        }else{
            setCarrito([...carrito, producto])
        }
        
    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    const estaEnElCarrito = (idProducto) => {
        return carrito.some((producto) => producto.id === idProducto);
      };
      

    const totalCantidad = ()=>{
        return carrito.reduce((total, producto)=> total + producto.cantidad, 0)
    }

    const borrarCarrito = ()=>{
        setCarrito([])
    }

    const borrarProducto = (idProducto)=>{ 
        const productosFiltrados = carrito.filter((producto)=> producto.id !== idProducto)
        setCarrito(productosFiltrados)
    }

    const precioTotal = () => {
        return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
      };
      

    return (
        //primer llave es para poner codigo js adentro, la segunda llave es para enviar el objeto
        <CartContext.Provider value={{carrito, añadirProducto, totalCantidad, borrarCarrito, borrarProducto, precioTotal}}> 
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider, CartContext}