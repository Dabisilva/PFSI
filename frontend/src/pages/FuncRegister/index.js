import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';


export default function FuncRegister(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [CPF, setCPF] = useState('');

    const History = useHistory()
    
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            telefone,
            CPF
        };
        try{
            const response = await api.post('func', data);
            alert(`Cadastro realizado com sucesso ${response.data.name}`)
        History.push('/');
        }catch(err){
            alert('Erro no Cadastro, tente novamente.')
        }
    }
    return(
        <>
            <div className="newFunc">
                <div className="content">
                    <section>
                        <h1>Novo Funcionario</h1>
                    </section>
                    <form onSubmit={handleRegister} >
                        <input
                            placeholder="Nome"
                            value={name}
                            onChange={ e => setName(e.target.value)}
                            maxLength="50"
                        />
                        <input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            maxLength="50"
                        />
                        <input
                            placeholder="Telefone"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            maxLength="11"
                        />
                        <input
                            placeholder="CPF"
                            value={CPF}
                            onChange={e => setCPF(e.target.value)}
                            maxLength="11"
                        />
                        <div className="buttons">
                            <button className="button" type="submit">Cadastrar</button>
                            <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#093d3b"/>
                                Voltar      
                            </Link>
                        </div>  
                    </form>
                </div>
            </div>
        </>
    )
}