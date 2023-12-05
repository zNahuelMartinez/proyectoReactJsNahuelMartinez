import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/navBar/NavBar'

import './main.scss'


function App() {

  return (
      <div>
        <NavBar />
        <ItemListContainer Prop = {"Hola, soy una prop"}  />
        <ItemListContainer Prop = {"El proyecto va a ser una web de zapatillas"}  />
      </div>
  )
}

export default App
