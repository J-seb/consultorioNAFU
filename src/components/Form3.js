import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import months from '../utils/monthString';

export default function Form3() {

    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const initValues = {
        fecha: '',

        lugar: '',

        sede: '',

        nombreSupervisor: '',
        idSupervisor: '',
        lugarExpIdSupervisor: '',

        nombreTutor: '',
        idTutor: '',
        lugarExpIdTutor: '',

        nombreEstudiante: '',
        codigo: '',
        idEstudiante: '',
        lugarExpIdEstudiante: '',

        fechaFinalizacion: ''
    }

    const schema = Yup.object().shape({
        fecha: Yup.date().required('Fecha de inicio es requerida'),

        lugar: Yup.string().max(50, 'Lugar debe ser menor a 50 caracteres').matches(lettersRegExp, 'Lugar inválido').required('Lugar es requerido'),
        
        sede: Yup.string().max(50, 'Sede debe ser menor a 50 caracteres').matches(lettersRegExp, 'Sede inválida').required('Sede es requerido'),

        nombreSupervisor: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idSupervisor: Yup.string().max(20, 'Id debe ser menor a 20 caracteres').matches(idRegExp, 'Id inválido').required('Id es requerido'),
        lugarExpIdSupervisor: Yup.string().max(50, 'Lugar de exp debe ser menor a 50 caracteres').matches(lettersRegExp, 'Lugar de exp inválida').required('Lugar es requerido'),

        nombreTutor: Yup.string().max(50).matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idTutor: Yup.string().max(20, 'Id debe ser menor a 20 caracteres').matches(idRegExp, 'Id inválido').required('Id es requerido'),
        lugarExpIdTutor: Yup.string().max(50, 'Lugar de exp debe ser menor a 50 caracteres').matches(lettersRegExp, 'Lugar de exp inválida').required('Lugar es requerido'),

        nombreEstudiante: Yup.string().max(50).matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        codigo: Yup.string().max(20, 'Código debe ser menor a 20 caracteres').matches(idRegExp, 'Código inválido').required('Id es requerido'),
        idEstudiante: Yup.string().max(20, 'Id debe ser menor a 20 caracteres').matches(idRegExp, 'Id inválido').required('Id es requerido'),
        lugarExpIdEstudiante: Yup.string().max(50, 'Lugar de exp debe ser menor a 50 caracteres').matches(lettersRegExp, 'Lugar de exp inválida').matches(lettersRegExp, 'Lugar exp. inválido').required('Lugar es requerido'),
    
        fechaFinalizacion: Yup.date().required('Fecha de finalización es requerida'),
    });

    const handleSubmit = async (values) => {
        const date = values.fecha.split('-');
        const dateFinal = values.fechaFinalizacion.split('-');

        const obj = { ...values, 
            diaN: date[2], 
            mes: months[Number(date[1]) - 1], 
            ano: date[0],
            diaNFin: dateFinal[2],
            mesFin: months[Number(dateFinal[1]) - 1],
            anoFin: dateFinal[0],
        };
        const type = window.event.target.name;
        console.log(type);
        downloadFile(references.actaDeInicio, 2, obj, type);
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
                    <FormField key='form3fecha'
                        name="fecha" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Fecha finalización: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form3fecha'
                        name="fechaFinalizacion" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Lugar de práctica: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form3lugar'
                        name="lugar" 
                        placeholder="Ubicación" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Sede Institución Educativa: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form3sede'
                        name="sede" 
                        placeholder="Lugar de sede" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Supervisor: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form3NombreSupervisor'
                        name="nombreSupervisor" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form3IdSupervisor'
                        name="idSupervisor" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form3LugarExpIdSupervisor'
                        name="lugarExpIdSupervisor" 
                        placeholder="Lugar de expedición" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Tutor: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form3NombreTutor'
                        name="nombreTutor" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form3IdTutor'
                        name="idTutor" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form3LugarExpIdTutor'
                        name="lugarExpIdTutor" 
                        placeholder="Lugar de expedición" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Estudiante: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form3NombreEstudiante'
                        name="nombreEstudiante" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form3Codigo'
                        name="codigo" 
                        placeholder="Código" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>


                <div className="col-12 col-lg-3">
                    <FormField key='form3IdEstudiante'
                        name="idEstudiante" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form3LugarExpIdEstudiante'
                        name="lugarExpIdEstudiante" 
                        placeholder="Lugar de expedición" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            
            <SubmitButton className="form-button-content me-5" name="downloadFile3">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            <SubmitButton className="form-button-content" name="printFile3">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton>
      </Form>
    )
}
