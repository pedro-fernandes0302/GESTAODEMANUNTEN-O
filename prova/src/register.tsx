import Card from './card.tsx'
import { useState } from 'react'
interface RegisterProps {
  onRegister: (problemaProps: problemaProps) => void;
}

function Register({ onRegister }: RegisterProps) {
  const [nome, setNome] = useState('')
  const [prioridade, setPrioridade] = useState(undefined)
  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState('')
  const [status, setStatus] = useState(false)

  return (
    <div className="Register">
      <h2>Registrar Problema</h2>
        <form>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="Prioridade" value={prioridade} onChange={(e) => setPrioridade(e.target.value)} />
            <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <input type="text" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            <button type="submit">Registrar</button>'
            </form>
    </div>
  )
}

export default Register