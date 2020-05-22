import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

export default function Register(){
    const [name, setName]  = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTel] = useState('');
    const [CPF, setCpf] = useState('');

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            telefone,
            CPF
        }
        try{
            await api.post('/', data)
            history.push('/home')
        }
        catch(err){
            alert('[ERRO] não foi possivel efetar o cadastro')
        }
    }
    return(
        <>
            <div className="newStudent">
                <div className="content">
                    <section>
                        <h1>Cadastrar novo aluno</h1>
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            maxLength="50"
                        />
                        <input
                            placeholder="Telefone"
                            value={telefone}
                            onChange={e => setTel(e.target.value)}
                            maxLength="11"
                        />
                        <input
                            placeholder="CPF"
                            value={CPF}
                            onChange={e => setCpf(e.target.value)}
                            maxLength="11"
                        />
                        <div className="buttons">
                            <button className="button" type="submit">Cadastrar</button>
                            <Link className="back-link" to="/home">
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