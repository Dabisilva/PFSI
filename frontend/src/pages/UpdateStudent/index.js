import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

export default function UpdateStudent(){

    return(
        <>
             <div className="newStudent">
                <div className="content">
                    <section>
                        <h1>Atualizar dados do aluno</h1>
                    </section>
                    <form >
                        <input
                            placeholder="Nome"
                            maxLength="50"
                        />
                        <input
                            placeholder="Email"
                            maxLength="50"
                        />
                    </form>
                    <div className="buttons">
                        <button className="button" type="submit">Atualizar</button>
                        <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#093d3b"/>
                            Voltar      
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}