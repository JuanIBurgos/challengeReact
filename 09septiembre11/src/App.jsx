import { useState } from 'react'
import './App.css'
import Navbar from './assets/Navbar01'
import List from './list01'
import SubTittle from './SubTittle'

function App() {
  // En este parte se coloca código JS
  const [saludo, setSaludo] = useState ('Bienvenido a la page de Aprendiendo React');

  function cambiarSaludo(){
    if (saludo ==='Bienvenido a la page de Aprendiendo React'){
      setSaludo('Saludos compañero de Aprendiendo React, los esperamos para otra consulta. ');
    }else{
      setSaludo('Bienvenido a la page de Aprendiendo React');
    }
  }

  return (
    <>
      <div>
        <h1>Primer Componente - Navbar</h1>
        <Navbar/>
      </div>
      
      <div>
        <h1>Segundo Componente - Lista</h1>
        <List/>
      </div>  
     
      <div>
        <h1>Tercer Componente - Uso de Props</h1>
        <SubTittle questions=" hacia donde vas." />
      </div>

      <div>
        <h1>Cuarto Elemento - Boton</h1>
        <h2>{saludo}</h2>
        <button onClick={cambiarSaludo}>Saludar</button>
      </div>
    </>
  )
}

export default App;
