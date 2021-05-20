import React, {useState} from 'react';
import './style.css';
import api from '../../services/api';


export default function NovaSenha({ location, history }) {
    const { usuario } = location.state;
    const [senha, setSenha] = useState('');
    const [forca, setForca] = useState(0);
    const [nivel, setNivel] = useState('');
    const [color, setColor] = useState('');
    const [type, setType] = useState('password');
    const [ok, setOk] = useState(false);


    function verifica(value){
        setSenha(value)
        const passToTest = senha;
        if((passToTest.length >= 4) && (passToTest.length <= 7)){
            setForca(5);
        }else if(passToTest.length>7){
            setForca(6);
        }
        if(passToTest.match(/[a-z]+/)){
            setForca(8);
        }
        if(passToTest.match(/[A-Z]+/)){
            setForca(10);
        }
        if(passToTest.match(/d+/)){
            setForca(10);
        }
        if(passToTest.match(/W+/)){
            setForca(11);
        }
        setColor(setarNivel());
    }

    function setarNivel(){
        if (forca < 5) {
            setNivel('Fraca');
            return 'red';
        } else if ((forca >= 5) && (forca < 7)) {
            setNivel('Justa');
            return 'yellow';
        } else if ((forca >= 7) && (forca < 10)) {
            setNivel('Forte');
            return 'blue';
        } else {
            setNivel('Excelente');
            return 'green';
        }
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await api.post('/novaSenha',{
            usuario,
            senha
        });
        if(response.status === 200) {
            setOk(true);
            setTimeout(() => {
                history.push('/');
            },3000);
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
            <h1>Nova Senha</h1>
            <small>Insira a sua senha definitiva.</small>
            <form onSubmit={handleSubmit} >
                <span style={{color: color}}> { nivel } </span>
                <input onChange={event => verifica(event.target.value)} type={type} placeholder="Insira a senha" />
                <div id="passContainer">
                    <label style={{verticalAlign: 'top'}}>Mostrar senha</label>
                    <input id="showPass" type="checkbox" onChange={handleShowPassword} />
                </div>
                <button disabled={forca <= 5}>Cadastrar</button>
            </form>
            <span> { ok ? 'Senha alterarda com sucesso. Redirecionando...' : '' } </span>
        </main>
    )
}