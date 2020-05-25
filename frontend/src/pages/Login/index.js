import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Login(){
    const [name, setName] = useState('')
    const [ CPF, setCPF] = useState('')

    const History = useHistory();

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('session', {CPF})
            
            localStorage.setItem('funcName', name)
            localStorage.setItem('func', response.data)

            History.push('/home')
        }catch(err){
            alert('[ERRO] CPF incorreto, tente novamente.')
        }    
    }

    return(
        <>
            <div className="container">
                <div className="logon-container">
                    <section className="form">
                        <form onSubmit={handleLogin}>
                            <h1>Faça seu Login</h1>

                            <input 
                                placeholder="Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            ></input>
                            <input 
                                type="password"
                                placeholder="CPF"
                                maxLength="11"
                                value={CPF}
                                onChange={e => setCPF(e.target.value)}
                            ></input>
                            <button className="button" type="submit">Entrar</button>

                            <Link className="back-link" to="/FuncRegister">
                                <FiLogIn size={16} color="#093d3b"/>
                                Fazer cadastro
                            </Link>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}