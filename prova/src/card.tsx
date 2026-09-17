import { useState } from 'react'


interface problemaProps{
    nome: string;
    prioridade: number;
    descricao: string;
    categoria:string;
    status: boolean;
}

export default function Card({nome, prioridade, descricao, categoria, status}: problemaProps) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>Prioridade: {prioridade === 1 ? 'Baixa' : prioridade === 2 ? 'Média' : prioridade === 3 ? 'Importante' : prioridade === 4 ? 'Alta' : prioridade === 5 || prioridade > 5 ? 'Extrema' : prioridade === null || prioridade === undefined ? 'Desconhecida' : 'Desconhecida' }</p>
      <p>Descrição: {descricao}</p>
      <p>Categoria: {categoria}</p>
      <p>Status: {status ? 'Resolvido' : 'Pendente'}</p>
    </div>
  );
}

