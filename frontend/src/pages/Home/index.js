import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import { FiPower, FiTrash2} from 'react-icons/fi'
import api from '../../services/api';

export default function Home(){
    const [alunos, setAlunos] = useState([])

    const history = useHistory();

    useEffect(() => {
        api.get('List')
        .then(response => {
            setAlunos(response.data)
        })
    }, [])

    async function Delete(id){
        try{
            api.delete(`List/${id}`, {
                headers:{
                    Authorization: alunos.CPF
                }
            })
            alert('Certeza que deseja deletar?')
            setAlunos(alunos.filter(aluno => aluno.id !== id))
        }
        catch(err){
            alert('[ERRO] não foi possivel deletar, tente novamente.')
        }
    }
    function logout(){
        localStorage.clear();

        alert('Deseja sair?')
        history.push('/');
    }
    return(
        <>
            <div className="homeContainer">
                <header>
                    <Link className="button" to="/register">Cadastrar novo aluno</Link>
                    <button onClick={logout} type="button">
                    <FiPower size={18} color="#E02041"/>
                    </button>
                </header>
                <h1>Alunos Matriculados</h1>
                <ul>
                    {alunos.map(aluno => (
                        <li key={aluno.id}>
                        <strong>Nome:</strong>
                        <p>{aluno.name}</p>

                        <strong>EMAIL:</strong>
                        <p>{aluno.email}</p>

                        <strong>Telefone</strong>
                        <p>{aluno.telefone}</p>

                        <strong>CPF:</strong>
                        <p>{aluno.CPF}</p>

                        <div className="botoes">
                            <Link className="update">Atualizar dados</Link>
                            <button onClick={() => Delete(aluno.id)} type="button" className="delete">
                                Deletar aluno
                                <FiTrash2 size={20} color="#093d3b" />
                            </button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}