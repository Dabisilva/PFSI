import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import { FiPower} from 'react-icons/fi'

export default function Home(){

    return(
        <>
            <div className="homeContainer">
                <header>
                    <Link className="button" to="/register">Cadastrar novo aluno</Link>
                    <button onClick={() => {}} type="button">
                    <FiPower size={18} color="#E02041"/>
                    </button>
                </header>
                <h1>Alunos Matriculados</h1>
                <ul>
                    <li>
                        <strong>Nome:</strong>
                        <p>Davi</p>
                        <strong>EMAIL:</strong>
                        <p>davi1234@gmail.com</p>
                        <strong>CPF:</strong>
                        <p>122455679990</p>
                        <Link className="update">Atualizar dados</Link>
                    </li>
                    <li>
                        <strong>Nome:</strong>
                        <p>Davi</p>
                        <strong>EMAIL:</strong>
                        <p>davi1234@gmail.com</p>
                        <strong>CPF:</strong>
                        <p>122455679990</p>
                        <Link className="update">Atualizar dados</Link>
                    </li>
                    <li>
                        <strong>Nome:</strong>
                        <p>Davi</p>
                        <strong>EMAIL:</strong>
                        <p>davi1234@gmail.com</p>
                        <strong>CPF:</strong>
                        <p>122455679990</p>
                        <Link className="update" to="">Atualizar dados</Link>
                    </li>
                    <li>
                        <strong>Nome:</strong>
                        <p>Davi</p>
                        <strong>EMAIL:</strong>
                        <p>davi1234@gmail.com</p>
                        <strong>CPF:</strong>
                        <p>122455679990</p>
                        <Link className="update">Atualizar dados</Link>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}