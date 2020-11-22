import React from 'react';
import './styles.css';
import Menu from '../../components/Menu';
import { FaSearch, FaFolder } from 'react-icons/fa';

export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <Menu />
            <div className="dashboard-content">
                <div className="search">
                    <input type="text" placeholder="Pesquisa um documento" />
                    <a class="button">
                       <FaSearch /> Buscar arquivo
                    </a>
                </div>
                <div className="documents">
                    <h1>Meus documentos</h1>
                    <div className="documents-list">
                        <div className="document">
                            <FaFolder />
                            <h2>Nutricionista</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Clinico Geral</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Fisioterapeuta</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Ginecologista</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Enfermaria</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Neurologista</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Dentista</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Oftalmologista</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                        <div className="document">
                            <FaFolder />
                            <h2>Psicóloga</h2>
                            <p>Novembro 22/2020</p>
                        </div>
                    </div>
                </div>
                <div className="uploads">
                    <h1>Uploads recentes</h1>
                    <div className="upload-list">
                        <div className="upload">
                            <h2>Exame de Sangue.docx</h2>
                            <p>Novembro 22/2020</p>
                            <p>300kb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}