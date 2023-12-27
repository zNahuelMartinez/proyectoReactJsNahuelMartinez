import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/navBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './main.scss'


function App() {

  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer Prop = {"Hola, soy una prop"}/>}/>
          <Route path='/categorias/:categoria' element={<ItemListContainer Prop = {"Hola, soy una prop"}/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
