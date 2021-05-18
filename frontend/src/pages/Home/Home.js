import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main>
            <h1>Desafio de Segunraça da Informação</h1>
            <div id="buttons">          
                <Link to="/cadastro">
                    <button>Cadastro</button>
                </Link>
                <Link to="/esqueci">
                    <button>Esqueci minha senha</button>
                </Link>
                <Link to="/acessar">
                    <button>Acessar</button>
                </Link>
            </div>
        </main>
    )
}