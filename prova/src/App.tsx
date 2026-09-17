import { useState } from 'react'
import './App.css'
import Card from './card.tsx'

function App() {
  return (
    <div className="App">
      <Card 
        nome="Problema 1" 
        prioridade={undefined} 
        descricao="Descrição do problema 1" 
        categoria="Elétrica" 
        status={false} 
      />
    </div>
  );
}

export default App
