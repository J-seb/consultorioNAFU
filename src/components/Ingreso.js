import React, { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Joi from 'joi';
import swal from 'sweetalert';
import { sendEmailToUser } from '../services/auth';

function Ingreso() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const schema = Joi.object({
        email: Joi.string().email({
            minDomainSegments: 3,
            tlds: { allow: ['co'] }
        }).messages({
            'string.email': `"Correo" no valido`,
            'string.empty': `"Correo" no puede ser vacio`,
            'string.required': `"Correo" requerido`
        })
    });

    const handleSubmit = async () => {
        if (error) {
            swal("Email no válido", "Debe ingresar un email del dominio permitido", "error");
            return;
        }
        try {
            console.log(email)
            await sendEmailToUser(email);
            swal("Email enviado", `Ingrese a su correo ${email} y acceda al enlace de acceso proporcionado.`, "success");
            
        } catch (error) {
            console.log(error)
        }
    }
        

    const handleChange = ({ target }) => {
        setEmail(target.value)
        console.log(target.value)
        validateEmail(target.value);
    }

    const validateEmail = (email) => {
        const { value, error } = schema.validate({ email });
        console.log(value)
        if (error) {
            setError(error.message);
        } else if (!value.email.includes('usco.edu.co')) {
            setError('"Correo" no valido')
        } else {
            setError(null);
        }
    }

    const logoRoute = './images/uniminuto.png';
    const splashRoute = './images/splash.svg';
    return (
        <div className='row m-0 p-0'>
            <div className='col-lg-4 login'>
                <img src={logoRoute} alt={'uniminuto'} className='logo'/>
                <h1 className="info-login">Consultorio NAF</h1>
                <h2 className="info-login">INGRESO</h2>
                <Input placeholder='Correo Institucional' className='form-input' value={email} onChange={handleChange} error={error}/>
                <Button children='Solicitar Acceso' className='form-button' onClick={handleSubmit}/>
                <h3 className="info-login">Uniminuto Neiva</h3>
                <h3 className="info-login">2021</h3>
                <a href="https://storyset.com/data">Data illustrations by Storyset</a>
            </div>
            <div className='col-lg-8 d-none d-lg-block'>
                <div className="login-splash">
                    <img src={splashRoute} alt={'splash'} className='splash'/>
                </div>
            </div>
        </div>
    )
}

export default Ingreso
