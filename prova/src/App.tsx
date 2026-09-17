import { useState } from 'react'
import './App.css'
import Card from './card.tsx'
import Register from './register.tsx'
import problemaProps  from './card.tsx'

function App() {
  const [tarefa, setTarefa] = useState<problemaProps[]>([])

  function handleRegister(problema: problemaProps) {
    setTarefa([...tarefa, problema])
  }
  return (
    <>
    <div className="App">
        <Register onRegister={handleRegister} />
    </div>
    <div className="tarefa-list">
      {tarefa.slice(1).map((problema, index) => (
        <Card key={index} nome={problema.nome} prioridade={problema.prioridade} descricao={problema.descricao} categoria={problema.categoria} status={problema.status} />
      ))}
    </div>
    </>
  );
}

export default App
