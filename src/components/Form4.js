import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import months from '../utils/monthString';

export default function Form4() {

    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const initValues = {
        fechaReunion: '',

        lugarReunion: '',

        nombreTutorPractica: '',
        nombreSupervisorCampo: '',
        nombreEstudiantePracticante: '',

        fechaCompromiso1: '',
        fechaCompromiso2: '',
        fechaCompromiso3: '',
        
        horaReunion: '',
        horaCierreDeSesion: '',
    }

    const schema = Yup.object().shape({
        fechaReunion: Yup.date().required('Fecha es requerida'),
        
        lugarReunion: Yup.string().max(50, 'Lugar debe ser menor a 50 caracteres').matches(lettersRegExp, 'Lugar inválido').required('Lugar es requerido'),
        nombreTutorPractica: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        nombreSupervisorCampo: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        nombreEstudiantePracticante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        
        fechaCompromiso1: Yup.date().required('Fecha 1 es requerida'),
        fechaCompromiso2: Yup.date().required('Fecha 2 es requerida'),
        fechaCompromiso3: Yup.date().required('Fecha 3 es requerida'),

        horaReunion: Yup.string().required('Hora es requerida'),
        horaCierreDeSesion: Yup.string().required('Hora es requerida'),

    });

    const handleSubmit = async (values) => {
        const fechaReunion = values.fechaReunion.split('-');
        const fechaCompromiso1 = values.fechaCompromiso1.split('-');
        const fechaCompromiso2 = values.fechaCompromiso2.split('-');
        const fechaCompromiso3 = values.fechaCompromiso3.split('-');

        const obj = { ...values, 
            diaN: fechaReunion[2], 
            mes: months[Number(fechaReunion[1]) - 1], 
            ano: fechaReunion[0],
            fechaCompromiso1: `${fechaCompromiso1[2]}/${fechaCompromiso1[1]}/${fechaCompromiso1[0]}`,
            fechaCompromiso2:`${fechaCompromiso2[2]}/${fechaCompromiso2[1]}/${fechaCompromiso2[0]}`,
            fechaCompromiso3: `${fechaCompromiso3[2]}/${fechaCompromiso3[1]}/${fechaCompromiso3[0]}`,
        };

        downloadFile(references.actaN1, 3, obj);
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
            <div className="row form-group-row">
                <span>Fecha y hora de reunión: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form4FechaReunion'
                        name="fechaReunion" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
                <div className="col-12 col-lg-3">
                    <FormField key='form4HoraReunion'
                        name="horaReunion" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="time"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Sitio de reunión: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form4LugarReunion'
                        name="lugarReunion" 
                        placeholder="Lugar" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Asistentes: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form4NombreTutorPractica'
                        name="nombreTutorPractica" 
                        placeholder="Tutor" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form4NombreSupervisorCampo'
                        name="nombreSupervisorCampo" 
                        placeholder="Supervisor" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form4NombreEstudiantePracticante'
                        name="nombreEstudiantePracticante" 
                        placeholder="Tutor" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Fechas compromisos 1 / 2 / 3: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form4FechaCompromiso1'
                        name="fechaCompromiso1" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form4FechaCompromiso2'
                        name="fechaCompromiso2" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form4FechaCompromiso3'
                        name="fechaCompromiso3" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Cierre de sesión: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form4HoraCierreDeSesion'
                        name="horaCierreDeSesion" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="time"
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
