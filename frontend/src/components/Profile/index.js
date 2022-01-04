import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt='Be The Hero'></img>
                <span>Seja bem vinda, ONG</span>
                <Link to='/incidents/new' className='button'>Cadastrar novo caso</Link>
                <button type='button'>
                    <FiPower size={18} color='#e02041'/>
                </button>
            </header>
            <h1>Casos registrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Profile
