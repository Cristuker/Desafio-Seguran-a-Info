import React, { useState } from 'react';
import './style.css'
import api from '../../services/api'

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(nome, email)
        const response = await api.post('/preCadastro',{
            email,
            nome
        });
        console.log(response)
    }
    return (
        <main>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome de usuário</label>
                <input onChange={event => setNome(event.target.value)} type="text" placeholder="Insira o seu nome de usuário" />
                <label>Email</label>
                <input onChange={event => setEmail(event.target.value)} type="text" placeholder="Insira o seu email" />
                <button >Cadastrar</button>
            </form>
        </main>
    )
}