import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import days from '../utils/dayString';
import months from '../utils/monthString';

export default function Form1() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const initValues = {
        fecha: '',

        nombreJefe: '',
        idJefe: '',
        telJefe: '',
        emailJefe: '',

        nombreDocente: '',
        idDocente: '',
        telDocente: '',
        emailDocente: '',

        nombreEstudiante: '',
        idEstudiante: '',
        telEstudiante: '',
        emailEstudiante: '',
    }

    const schema = Yup.object().shape({
        fecha: Yup.date().required('Fecha es requerida'),
        
        nombreJefe: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idJefe: Yup.string().max(20, 'Id debe ser menor a 20 caracteres').matches(idRegExp, 'Id inválido').required('Id es requerido'),
        telJefe: Yup.string().max(20, 'Tel debe ser menor a 20 caracteres').matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        emailJefe: Yup.string().email('Se requiere email válido').required('Email es requerido'),

        nombreDocente: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idDocente: Yup.string().max(20, 'Id debe ser menor a 20 caracteres').matches(idRegExp, 'Id inválido').required('Id es requerido'),
        telDocente: Yup.string().max(20, 'Tel debe ser menor a 20 caracteres').matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        emailDocente: Yup.string().email('Se requiere email válido').required('Email es requerido'),

        nombreEstudiante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idEstudiante: Yup.string().max(20, 'Id debe ser menor a 20 caracteres').matches(idRegExp, 'Id inválido').required('Id es requerido'),
        telEstudiante: Yup.string().max(20, 'Tel debe ser menor a 20 caracteres').matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        emailEstudiante: Yup.string().email('Se requiere email válido').required('Email es requerido'),
    });

    const handleSubmit = async (values) => {
        const date = values.fecha.split('-');

        const obj = { ...values, 
            diaN: date[2], 
            mes: months[Number(date[1]) - 1], 
            ano: date[0], 
            diaS: days[Number(date[2]) - 1],
        };

        downloadFile(references.compromisoInterinstitucional, 0, obj);
        console.log('Form submitted!!!', values)
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
            <div className="row form-group-row">
                <span>Fecha: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form1fecha'
                        name="fecha" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Jefe: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form1nombreJefe'
                        name="nombreJefe" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1IdJefe'
                        name="idJefe" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1TelJefe'
                        name="telJefe" 
                        placeholder="Teléfono" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1EmailJefe'
                        name="emailJefe" 
                        placeholder="Email" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Docente: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form1NombreDocente'
                        name="nombreDocente" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1IdDocente'
                        name="idDocente" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1TelDocente'
                        name="telDocente" 
                        placeholder="Teléfono" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1EmailDocente'
                        name="emailDocente" 
                        placeholder="Email" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Estudiante: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form1NombreEstudiante'
                        name="nombreEstudiante" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1IdEstudiante'
                        name="idEstudiante" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1TelEstudiante'
                        name="telEstudiante" 
                        placeholder="Teléfono" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form1EmailEstudiante'
                        name="emailEstudiante" 
                        placeholder="Email" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>
            <SubmitButton className="form-button-content">
                Enviar
            </SubmitButton>
      </Form>
    )
}
