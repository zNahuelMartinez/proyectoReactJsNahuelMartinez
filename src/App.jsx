import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/navBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Carrito from './componentes/Carrito/Carrito'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Checkout from './componentes/Checkout/Checkout'

import './main.scss'


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer Prop = {"Hola, soy una prop"}/>}/>
            <Route path='/categorias/:categoria' element={<ItemListContainer Prop = {"Hola, soy una prop"}/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<Navigate to="/" />}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
