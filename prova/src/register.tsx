import Card from './card.tsx'
import { useState } from 'react'
import { type problemaProps } from './card.tsx'
import './register.css'
interface RegisterProps {
  onRegister: (problemaProps: problemaProps) => void;
}

function Register({ onRegister }: RegisterProps) {

    const [nome, setNome] = useState('')
  const [prioridade, setPrioridade] = useState<number |undefined >(undefined)
  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState('')
  const [status, setStatus] = useState(false)
  const [local, setLocal] = useState('')
      function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Garante que a página NÃO vai recarregar

    // 2. Dispara a função onRegister passando o objeto montado
    onRegister({
      nome,
      prioridade: prioridade as any,
      descricao,
      categoria,
      status,
      local
    });
        setNome('')
    setPrioridade(undefined)
    setDescricao('')
    setCategoria('')
    setStatus(false)
    setLocal('')
  }
  return (
    <div className="Register">
      <h2>Registrar Problema</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="Prioridade de 1 a 5" value={prioridade ?? ''} onChange={(e) => setPrioridade(e.target.value ? Number(e.target.value) : undefined)} />
            <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <input type="text" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            <input type="text" placeholder="Local" value={local} onChange={(e) => setLocal(e.target.value)} />
            <button type="submit">Registrar</button>
            </form>
    </div>
  )
}

export default Register