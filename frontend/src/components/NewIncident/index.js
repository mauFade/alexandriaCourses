import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

const NewIncident = () => {
    return (
        <div className='new-incident-container'>
            <div className='content'>
                <session>
                    <img src={logoImg} alt='Be The Hero'/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente.</p>
                    <Link to='/profile' className='back-link'>
                        <FiArrowLeft size={16} color='#e02041'/>
                        Voltar para home
                    </Link>
                </session>
                <form>
                    <input placeholder='Título do caso'/>
                    <textarea placeholder='Descrição' />
                    <input placeholder='Valor em reais'/>
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident
