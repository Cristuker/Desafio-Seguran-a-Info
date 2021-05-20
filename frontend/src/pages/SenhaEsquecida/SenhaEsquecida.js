import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

function SenhaEsquecida() {
    const [type, setType] = useState('password');
    const [senhaAtual, setAtual] = useState('');
    const [senhaNova, setNova] = useState('');
  
    async function handleSubmit(event) {
        event.preventDefault();
        await api.patch('')
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
          <h1>Alterar senha esquecida</h1>
          <form onSubmit={handleSubmit}>
                <label>Senha atual</label>
                <input onChange={event => setAtual(event.target.value)} placeholder="Senha atual" type={type}/>
                <label>Nova senha</label>
                <input onChange={event => setNova(event.target.value)} placeholder="Nova senha" type={type}/>
                <div id="passContainer">
                    <label style={{verticalAlign: 'top'}}>Mostrar senha</label>
                    <input id="showPass" type="checkbox" onChange={handleShowPassword} />
                </div>
          </form>
      </main>
    );
}

export default SenhaEsquecida;