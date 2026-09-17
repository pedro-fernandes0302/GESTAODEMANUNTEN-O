import { useState } from 'react'
import './App.css'
import Card from './card.tsx'
import Register from './register.tsx'
import CardComponent, { problemaProps } from './card.tsx'

function App() {
  const [tarefa, setTarefa] = useState<problemaProps[]>([])

  function handleRegister(problema: problemaProps) {
    setTarefa([...tarefa, problema])
  }
  return (
    <div className="App">
        <Register onRegister={handleRegister} />
        <Card nome={tarefa[0]?.nome} prioridade={tarefa[0]?.prioridade} descricao={tarefa[0]?.descricao} categoria={tarefa[0]?.categoria} status={tarefa[0]?.status} />
    </div>
  );
}

export default App
