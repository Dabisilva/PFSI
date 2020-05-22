import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function FuncRegister(){

    return(
        <>
            <div className="newStudent">
                <div className="content">
                    <section>
                        <h1>Novo Funcionario</h1>
                    </section>
                    <form onSubmit={()=>{}} >
                        <input
                            placeholder="Nome"
                            //value={name}
                            //onChange={ e => setName(e.target.value)}
                            maxLength="50"
                        />
                        <input
                            placeholder="Email"
                            //value={email}
                            //onChange={e => setEmail(e.target.value)}
                            maxLength="50"
                        />
                        <input
                            placeholder="Telefone"
                            //value={telefone}
                            //onChange={e => setTel(e.target.value)}
                            maxLength="11"
                        />
                        <input
                            placeholder="CPF"
                            //value={CPF}
                            //onChange={e => setCpf(e.target.value)}
                            maxLength="11"
                        />
                    </form>
                    <div className="buttons">
                        <button className="button" type="submit">Cadastrar</button>
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