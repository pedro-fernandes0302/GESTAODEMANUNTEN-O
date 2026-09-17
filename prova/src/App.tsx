// PP-0AG4P1Z-OGBZK5U
// Gestão de Chamados de Manutenção Predial

import { useState } from 'react'
import './App.css'
import Card from './card.tsx'
import Nav from './nav.tsx'
import Register from './register.tsx'
import {type problemaProps}  from './card.tsx'

function App() {
  const [tarefa, setTarefa] = useState<problemaProps[]>([])

  function handleRegister(problema: problemaProps) {
    setTarefa([...tarefa, problema])
  }
  return (
    <>
    <div className="App">
        <Nav />
        <Register onRegister={handleRegister} />
    </div>
    <div className="tarefa-list">
      {tarefa.slice(1).map((problema, index) => (
        <Card key={index} nome={problema.nome} prioridade={problema.prioridade} descricao={problema.descricao} categoria={problema.categoria} local={problema.local} status={problema.status} />
      ))}
    </div>
    </>
  );
}

export default App
