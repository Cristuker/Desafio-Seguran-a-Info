import React, { useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function Esqueci() {
    const [usuario, setUsuario] = useState('');
    const [error, setError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        let response
        try {
            response = await api.get('/esqueci', {
                params: {
                    usuario
                }
            });
            console.log(response);

        } catch(error) {
            setError(true);
            setTimeout(() => {
                setError(false);
            },1500);
            console.log(error)
        }


    }
    return (
        <main>
            <h1>Esqueci minha senha</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={event => setUsuario(event.target.value)}  type="text" placeholder="Informe o nome de usuario" />
                <button>Recuperar senha</button>
            </form>

            <span>{ error ? 'Usuário não encontrado': '' }</span>
        </main>
    )
}