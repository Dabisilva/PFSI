import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Login(){

    return(
        <>
            <div className="container">
                <div className="logon-container">
                    <section className="form">
                        <form onSubmit={() =>{}}>
                            <h1>Faça seu Login</h1>

                            <input 
                                placeholder="Nome"
                                //value={id}
                                //onChange={e => setId(e.target.value)}
                            ></input>
                            <input 
                                placeholder="Senha"
                                //value={id}
                                //onChange={e => setId(e.target.value)}
                            ></input>
                            <button className="button" type="submit">Entrar</button>

                            <Link className="back-link" to="/FuncRegister">
                                <FiLogIn size={16} color="#093d3b"/>
                                Não tenho cadastro
                            </Link>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}