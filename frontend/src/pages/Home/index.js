import React from 'react';
import './styles.css';
import { FiPower} from 'react-icons/fi'

export default function Home(){

    return(
        <>
            <div className="homeContainer">
                <header>
                    <a href="">Cadastrar novo aluno</a>
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
                    </li>
                    <li>
                        <strong>Nome:</strong>
                        <p>Davi</p>
                        <strong>EMAIL:</strong>
                        <p>davi1234@gmail.com</p>
                        <strong>CPF:</strong>
                        <p>122455679990</p>
                    </li>
                    <li>
                        <strong>Nome:</strong>
                        <p>Davi</p>
                        <strong>EMAIL:</strong>
                        <p>davi1234@gmail.com</p>
                        <strong>CPF:</strong>
                        <p>122455679990</p>
                    </li>
                    <li>
                        <strong>Nome:</strong>
                        <p>Davi</p>
                        <strong>EMAIL:</strong>
                        <p>davi1234@gmail.com</p>
                        <strong>CPF:</strong>
                        <p>122455679990</p>
                    </li>
                </ul>
            </div>
        </>
    )
}