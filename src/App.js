import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

// Obtenemos las tareas gurdadas de LocalStorage
const App = () => {
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  // establecemos el estados de las tareas de arriba
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

// Guardando el estado en local storage 
useEffect(() => { 
  localStorage.setItem('tareas', JSON.stringify(tareas));
}, [tareas]);


//accedemos a localstorage y comprobamos si mostrar completadas es null
let configMostrarCompletadas = '';
if (localStorage.getItem('mostrarCompletadas') === null){
  configMostrarCompletadas = true;
} else {configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';

}


const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

useEffect(() =>  {
localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
}, [mostrarCompletadas]);


  console.log(tareas);

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas 
      tareas={tareas} 
      cambiarTareas={cambiarTareas} 
      mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;


