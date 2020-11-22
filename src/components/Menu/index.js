import React from 'react';
import './styles.css';
import profile from '../../assets/profile.png';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className="menu-container">
            <div className="profile">
                <img src={profile} alt="Perfil" />
                <h2>Anaile Mariane</h2>
            </div>
            <Link to="/dashboard">
                <div className="menu-option">
                    Home
                </div>
            </Link>
            <div className="menu-option">
                Médicos
            </div>
            <div className="menu-option">
                Ficha médica 
            </div>
            <div className="menu-option">
                Saude diária
            </div>
            <div className="menu-option">
                Consultas
            </div>
        </div>
    )
}