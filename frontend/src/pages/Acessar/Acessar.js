import React, { useState } from 'react';
import './style.css'
import api from '../../services/api';


export default function Acessar() {

    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('');
    
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(usuario, senha)
        const response = await api.patch('/cadastro',{
            senha,
            usuario
        });
        console.log(response)
    }

    return (
        <main>
        <h1>Acessar</h1>
        <form onSubmit={handleSubmit}>
            <label>Nome de usuário</label>
            <input onChange={event => setUsuario(event.target.value)} type="text" placeholder="Insira o seu nome de usuário" />
            <label>Senha</label>
            <input onChange={event => setSenha(event.target.value)} type="text" placeholder="Insira a senha" />
            <button>Entrar</button>
        </form>
    </main>
    )
}