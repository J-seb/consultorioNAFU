import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';

export default function Form1() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const idRegExp = /^[0-9]+$/;

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
        
        nombreJefe: Yup.string().max(100).required('Nombre es requerido'),
        idJefe: Yup.string().matches(idRegExp, 'Id inválido').required('Id es requerido'),
        telJefe: Yup.string().matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        emailJefe: Yup.string().email('Se requiere email válido').required('Email es requerido'),

        nombreDocente: Yup.string().max(100).required('Nombre es requerido'),
        idDocente: Yup.string().matches(idRegExp, 'Id inválido').required('Id es requerido'),
        telDocente: Yup.string().matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        emailDocente: Yup.string().email('Se requiere email válido').required('Email es requerido'),

        nombreEstudiante: Yup.string().max(100).required('Nombre es requerido'),
        idEstudiante: Yup.string().matches(idRegExp, 'Id inválido').required('Id es requerido'),
        telEstudiante: Yup.string().matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        emailEstudiante: Yup.string().email('Se requiere email válido').required('Email es requerido'),
    });

    const handleSubmit = async (values) => {
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
                    <FormField 
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
                    <FormField 
                        name="nombreJefe" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="idJefe" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="telJefe" 
                        placeholder="Teléfono" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
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
                    <FormField 
                        name="nombreDocente" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="idDocente" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="telDocente" 
                        placeholder="Teléfono" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
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
                    <FormField 
                        name="nombreEstudiante" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="idEstudiante" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="telEstudiante" 
                        placeholder="Teléfono" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
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
