import React, { useState } from 'react';
import './style.css'
import api from '../../services/api';


export default function Acessar({ history }) {

    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('teste');
    const [type, setType] = useState('password');

    
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(usuario, senha)
        const response = await api.patch('/cadastro',{
            senha,
            usuario
        });
        if(response.status === 200) {
            history.push('/nova', {
                usuario
            })
        }
    }

    function handleShowPassword() {
        if (type === "password") {
            setType("text");
          } else {
            setType("password");
          }
    }

    return (
        <main>
            <h1>Logar</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome de usuário</label>
                <input onChange={event => setUsuario(event.target.value)} type="text" placeholder="Insira o seu nome de usuário" />
                <label>Senha</label>
                <input onChange={event => setSenha(event.target.value)} type={type} placeholder="Insira a senha" />
                <div id="passContainer">
                    <label style={{verticalAlign: 'top'}}>Mostrar senha</label>
                    <input id="showPass" type="checkbox" onChange={handleShowPassword} />
                </div>
                <button>Logar</button>
            </form>
        </main>
    )
}