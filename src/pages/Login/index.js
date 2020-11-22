import React from 'react';
import './styles.css';
import logo_branca from '../../assets/logo-branca.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div className="login-container">
            <div className="banner">
                <img src={logo_branca} alt="Integramed" />
            </div>
            <div className="right-content">
                <div className="login-content">
                    <img className="logo" src={logo} alt="Integramed" />
                    <input type="text" placeholder="CPF" />
                    <input type="password" placeholder="Senha" />
                    <span className="forgot">Esqueceu a senha?</span>

                    <Link className="button" to="/dashboard">
                        Login
                    </Link>
                    <span className="create-account">Novo? <span>Crie uma conta</span></span>
                </div>
            </div>
        </div>
    )
}