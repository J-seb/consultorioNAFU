import React, { useState } from 'react';
import options from '../utils/options';
import Files from './Files';
import ContentFormat from './Content';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import Form7 from './Form7';
import Form8 from './Form8';
import Form9 from './Form9';
import Form10 from './Form10';
import Form11 from './Form11';
import Form12 from './Form12';
import Form13 from './Form13';
import Form14 from './Form14';
import Form15 from './Form15';
import Form16 from './Form16';
import Form17 from './Form17';
import Form18 from './Form18';
import { Redirect } from 'react-router';
import { logout } from '../services/verifyUser';

// import Button from './common/Button';
// import Input from './common/Input';
// import Joi from 'joi';

function Main() {
    const [formato, setFormato] = useState(0);
    
    const activeSession = window.localStorage.getItem('session');
    const arrayOfForms = [
        <Form1 />, <Form2 />, <Form3 />, <Form4 />, <Form5 />, <Form6 />, 
        <Form7 />, <Form8 />, <Form9 />, <Form10 />, <Form11 />, <Form12 />, 
        <Form13 />, <Form14/>, <Form15 />, <Form16 />, <Form17 />, <Form18 />,    
    ];

    const onLogout = async () => {
        await logout();
        window.localStorage.removeItem('session');
        window.location = '/login';
    }

    const logoRoute = './images/uniminuto.png';
    // const activeSession = 'true';
    if (activeSession !== 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div className='row m-0 p-0'>
            <div className='col-12 header'>
                <img src={logoRoute} alt='logo' className='logo-main'/>
                <button className='sign-out-btn' onClick={onLogout}>
                    <span><p>Salir</p></span>
                    <i className="fa fa-sign-out sign-out-icon"></i>
                </button>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-lg-3 side-bar'>
                        <ul>
                            {options.map((option, index) => 
                            index === 0 ? 
                            <>
                            <h2>Consultorio NAF</h2>
                            <hr />
                            <li key={`opcion${index.toString()}`} className={index === formato ? 'active' : ''} 
                                onClick={() => setFormato(0)}>
                                <span>Descargar formatos sin diligenciar</span>
                            </li>
                            <h3>Formatos para diligenciar</h3>
                            <hr />
                            </> :
                            <li key={`opcion${index.toString()}`} 
                                className={index === formato ? 'active' : ''} 
                                onClick={() => setFormato(index)}>
                                <span>{option.title}</span>
                            </li>)}
                        </ul>
                    </div>
                    <div className='col-lg-9 container-content'>
                        {options.map((option, index) => 
                        index === 0 ?
                        <>
                        <Files key={`file${index.toString()}`} className={formato === 0 ? 'active-content' : 'hide-content'}/>
                        </>
                        :
                        <ContentFormat key={index} title={option.title} description={option.description}
                        className={formato === index ? 'active-content' : 'hide-content'}>
                            {arrayOfForms[index - 1]}
                        </ContentFormat>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
