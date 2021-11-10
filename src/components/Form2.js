import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import months from '../utils/monthString';

export default function Form2() {

    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const initValues = {
        fecha: '',

        nombreJefe: '',

        nombreEstudiante: '',
        idEstudiante: '',
    }

    const schema = Yup.object().shape({
        fecha: Yup.date().required('Fecha es requerida'),
        
        nombreJefe: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
 
        nombreEstudiante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idEstudiante: Yup.string().max(20, 'Id debe ser menor a 20 caracteres').matches(idRegExp, 'Id inválido').required('Id es requerido'),
    });

    const handleSubmit = async (values) => {
        const date = values.fecha.split('-');

        const obj = { ...values, 
            diaN: date[2], 
            mes: months[Number(date[1]) - 1], 
            ano: date[0],
        };
        // const type = window.event.target.name;
        // console.log(type);
        downloadFile(references.compromisoDeConfidencialidad, 1, obj);
        console.log('Form submitted!!!', values);
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
                    <FormField key='form2fecha'
                        name="fecha" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Estudiante: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form2NombreEstudiante'
                        name="nombreEstudiante" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form2IdEstudiante'
                        name="idEstudiante" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Jefe: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form2NombreJefe'
                        name="nombreJefe" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <SubmitButton className="form-button-content me-5" name="downloadFile2">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            {/* <SubmitButton className="form-button-content" name="printFile2">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton> */}
      </Form>
    )
}
