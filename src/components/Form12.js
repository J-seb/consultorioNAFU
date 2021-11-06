import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import months from '../utils/monthString';

export default function Form12() {

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
        fechaCompromiso4: '',
        
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
        fechaCompromiso4: Yup.date().required('Fecha 4 es requerida'),

        horaReunion: Yup.string().required('Hora es requerida'),
        horaCierreDeSesion: Yup.string().required('Hora es requerida'),

    });

    const handleSubmit = async (values) => {
        const fReunion = values.fechaReunion.split('-');
        
        const fCompromiso1 = values.fechaCompromiso1.split('-');
        const fCompromiso2 = values.fechaCompromiso2.split('-');
        const fCompromiso3 = values.fechaCompromiso3.split('-');
        const fCompromiso4 = values.fechaCompromiso4.split('-');


        const obj = { ...values,
            diaN: fReunion[2],
            mes: months[Number(fReunion[1]) - 1],
            ano: fReunion[0],
    
            fechaCompromiso1: `${fCompromiso1[2]}/${fCompromiso1[1]}/${fCompromiso1[0]}`,
            fechaCompromiso2: `${fCompromiso2[2]}/${fCompromiso2[1]}/${fCompromiso2[0]}`,
            fechaCompromiso3: `${fCompromiso3[2]}/${fCompromiso3[1]}/${fCompromiso3[0]}`,
            fechaCompromiso4: `${fCompromiso4[2]}/${fCompromiso4[1]}/${fCompromiso4[0]}`,
        };

        const type = window.event.target.name;
        console.log(type);
        downloadFile(references.actaN4, 11, obj, type);
        console.log('Form submitted!!!', values)
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
                    <FormField key='form12FechaReunion'
                        name="fechaReunion" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
                <div className="col-12 col-lg-3">
                    <FormField key='form12HoraReunion'
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
                    <FormField key='form12LugarReunion'
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
                    <FormField key='form12NombreTutorPractica'
                        name="nombreTutorPractica" 
                        placeholder="Tutor" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form12NombreSupervisorCampo'
                        name="nombreSupervisorCampo" 
                        placeholder="Supervisor" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form12NombreEstudiantePracticante'
                        name="nombreEstudiantePracticante" 
                        placeholder="Tutor" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Fechas compromisos 1 / 2 / 3 / 4: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form12FechaCompromiso1'
                        name="fechaCompromiso1" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form12FechaCompromiso2'
                        name="fechaCompromiso2" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form12FechaCompromiso3'
                        name="fechaCompromiso3" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form12FechaCompromiso4'
                        name="fechaCompromiso4" 
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
                    <FormField key='form12HoraCierreDeSesion'
                        name="horaCierreDeSesion" 
                        placeholder="Fecha" 
                        className="form-input-content"
                        type="time"
                        autoComplete="off"
                    />
                </div>
            </div>
            <SubmitButton className="form-button-content me-5" name="downloadFile12">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            <SubmitButton className="form-button-content" name="printFile12">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton>
      </Form>
    )
}
