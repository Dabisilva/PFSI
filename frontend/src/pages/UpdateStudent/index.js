import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function UpdateStudent(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const History = useHistory();
    
    const id = localStorage.getItem('alunoId')
    
    async function updateRegister(e){
        e.preventDefault()
        
        const data = {
            name,
            email,
            telefone
        }
        try{
            await api.put(`/List/up/${id}`, data)
            History.push('/home')
        }catch(err){
            alert('[ERRO] não foi possivel atualizar os dados tente novamente...')
        }
    }

    return(
        <>
             <div className="newStudent">
                <div className="content">
                    <section>
                        <h1>Atualizar dados do aluno</h1>
                    </section>
                    <form onSubmit={updateRegister}>
                        <input
                            maxLength="50"
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            placeholder="Email"
                            maxLength="50"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Telefone"
                            maxLength="11"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                        <div className="buttons">
                            <button className="button" type="submit">Atualizar</button>
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