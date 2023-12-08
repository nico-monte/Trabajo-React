import React from 'react'
import NavBar from './componets/NavBar'
import ItemListContainer from './componets/ItemListContainer'



const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>
    </div>
  )
}

export default App