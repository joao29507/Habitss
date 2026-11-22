import './App.css'

function App() {
  const habitos = [
  {id: 1, nombre: 'Leer'},
  {id: 2, nombre: 'Ejercicio'}
  ];

  return (
    <>
    <h1>Mi checklist Diario</h1>
    <ul>
      {habitos.map((habito)=> <li key={habito.id}>{ habito.nombre }</li>)}
    </ul>
    </>
  
  );
}


export default App
