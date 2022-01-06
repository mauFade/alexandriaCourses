import React from 'react';
import './style.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Logon = () => {
    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt='Be The Hero'/>
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder='Seu ID'/>
                    <button className='button' type='submit'>Entrar</button>                   
                    <Link to='/register' className='back-link'>
                        <FiLogIn size={16} color='#e02041'/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt='Heroes'/>
        </div>
    )
}

export default Logon