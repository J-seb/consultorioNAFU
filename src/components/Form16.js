import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';

export default function Form16() {

    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const initValues = {
        nombreEstudiante: '',
        nombreSupervisor: '',
        nombreDocente: '',
        nombreCoordinador: '',
    }

    const schema = Yup.object().shape({
        nombreEstudiante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        nombreSupervisor: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        nombreDocente: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        nombreCoordinador: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),

    });

    const handleSubmit = async (values) => {
        const obj = {
            "D7": values.nombreEstudiante,
            "E81": values.nombreSupervisor,
            "E82": values.nombreDocente,
            "E83": values.nombreCoordinador,
        }

        // const type = window.event.target.name;
        // console.log(type);
        downloadFile(references.registroDeAsistencia, 15, obj);
        console.log('Form submitted!!!', values)
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
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
            </div>

            <div className="row form-group-row">
                <span>Supervisor: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="nombreSupervisor" 
                        placeholder="Nombre" 
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
            </div>

            <div className="row form-group-row">
                <span>Coordinador: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="nombreCoordinador" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <SubmitButton className="form-button-content me-5" name="downloadFile16">
                <i className="fa fa-file-excel-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            {/* <SubmitButton className="form-button-content" name="printFile16">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton> */}
      </Form>
    )
}
