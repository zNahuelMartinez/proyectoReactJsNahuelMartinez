import { useState } from "react"



const ItemCount = ({ stock, agregarAlCarrito  }) => {
    const [contador, setContador] = useState(1);
    
    const sumar = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
    };
  
    const restar = () => {
      if (contador > 1) {
        setContador(contador - 1);
      }
    };
    
  
    return (
      <div className="botones">
        <div className="botonesMasMenos">
          <button onClick={restar} className="botonesMasMenosEstilos">-</button>
          <p>{contador}</p>
          <button onClick={sumar} className="botonesMasMenosEstilos">+</button>
        </div>
        <div className="botonAgregar">
        <button onClick={()=> agregarAlCarrito(contador)} className="botonAgregarEstilos">
    {/* <button onClick={() => agregarAlCarrito(contador)} className="botonAgregarEstilos"> */}
            Agregar al carrito
          </button>
        </div>
      </div>
    );
  };
  
  export default ItemCount;
  
  