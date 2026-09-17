import { useState } from 'react'
import './card.css'

export interface problemaProps{
    nome: string;
    prioridade: number;
    descricao: string;
    categoria:string;
    status?: boolean ;
    local:string;
}


export default function Card({nome, prioridade, descricao, categoria, status,local}: problemaProps) {
        const [solucao, setSolucao] = useState('')
        return (<>
    <div className="card">
      <h2>{nome}</h2>
      <p>Prioridade: {prioridade === 1 ? 'Baixa' : prioridade === 2 ? 'Média' : prioridade === 3 ? 'Importante' : prioridade === 4 ? 'Alta' : prioridade === 5 || prioridade > 5 ? 'Extrema' : prioridade === null || prioridade === undefined ? 'Desconhecida' : 'Desconhecida' }</p>
      <p>Descrição: {descricao}</p>
      <p>Categoria: {categoria}</p>
      <p>Local: {local}</p>
      <br></br>
      <input type="text" placeholder="Solução" value={solucao} onChange={(e) => setSolucao(e.target.value)} />
      <label>
        <input type="checkbox" checked={status} readOnly /> <span>{status ? 'Concluído' : 'Pendente'}</span>
      </label>
    </div>
 </>
  );
}

