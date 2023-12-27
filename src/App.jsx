import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/navBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'


import './main.scss'


function App() {

  return (
      <div>
        <NavBar />
        <ItemListContainer Prop = {"Hola, soy una prop"}/>
        <ItemDetailContainer/>
      </div>
  )
}

export default App
