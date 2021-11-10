import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import months from '../utils/monthString';

export default function Form13() {

    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const initValues = {
        fecha: '',
        fechaInicioPractica: '',

        lugarReunion: '',

        nombreSupervisor: '',
        idSupervisor: '',
        lugarIdSupervisor: '',

        nombreTutor: '',
        idTutor: '',
        lugarIdTutor: '',

        nombreEstudiante: '',
        idCEstudiante: '',
    }

    const schema = Yup.object().shape({
        fecha: Yup.date().required('Fecha es requerida'),
        fechaInicioPractica: Yup.date().required('Fecha es requerida'),

        lugarReunion: Yup.string().max(100).required('Lugar es requerido'),
        
        nombreSupervisor: Yup.string().max(100).matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idSupervisor: Yup.string().matches(idRegExp, 'Id inválido').required('Id es requerido'),
        lugarIdSupervisor: Yup.string().max(100).required('Lugar de exp es requerido'),

        nombreTutor: Yup.string().max(100).matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idTutor: Yup.string().matches(idRegExp, 'Id inválido').required('Id es requerido'),
        lugarIdTutor: Yup.string().max(100).required('Lugar de exp es requerido'),

        nombreEstudiante: Yup.string().max(100).matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idCEstudiante: Yup.string().matches(idRegExp, 'Id inválido').required('Id es requerido'),
    });

    const handleSubmit = async (values) => {

        const fechaReunion = values.fecha.split('-');
        const fechaInicio = values.fechaInicioPractica.split('-');

        const obj = {
            ...values,
            diaN: fechaReunion[2],
            mes: months[Number(fechaReunion[1]) - 1],
            ano: fechaReunion[0],

            diaInicioPractica: fechaInicio[2],
            mesInicioPractica: months[Number(fechaInicio[1]) - 1],
            anoInicioPractica: fechaInicio[0]
        }
        // const type = window.event.target.name;
        // console.log(type);
        downloadFile(references.actaDeTerminacion, 12, obj);
        console.log('Form submitted!!!', values);
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
            <div className="row form-group-row">
                <span>Fecha de reunión: </span>
                <div className="col-6 col-lg-3">
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
                <span>Fecha de inicio de práctica: </span>
                <div className="col-6 col-lg-3">
                    <FormField 
                        name="fechaInicioPractica" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Lugar reunión: </span>
                <div className="col-6 col-lg-3">
                    <FormField 
                        name="lugarReunion" 
                        placeholder="" 
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

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="idSupervisor" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="lugarIdSupervisor" 
                        placeholder="Lugar de exp." 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Tutor: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="nombreTutor" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="idTutor" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="lugarIdTutor" 
                        placeholder="Lugar de exp." 
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
                        name="idCEstudiante" 
                        placeholder="Código" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <SubmitButton className="form-button-content me-5" name="downloadFile13">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            {/* <SubmitButton className="form-button-content" name="printFile13">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton> */}
      </Form>
    )
}
