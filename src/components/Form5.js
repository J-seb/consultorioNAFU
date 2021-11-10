import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import FormFieldTextArea from './forms/FormFieldTextArea';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';

export default function Form5() {

    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const arrayOfWeeks = [
        'Semana 1', 'Semana 2', 'Semana 3', 'Semana4', 'Semana 5', 
        'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10', 
        'Semana 11', 'Semana 12', 'Semana 13', 'Semana 14', 'Semana 15', 
        'Semana 16', 
    ]

    const initValues = {
        nombreJefe: '',
        ccJefe: '',
        lugarCCJefe: '',

        nombreTutor: '',
        ccTutor: '',
        lugarCCTutor: '',

        area: '',

        nombreEstudiante: '',
        idEstudiante: '',
        nrcEstudiante: '',

        semana1: '',
        semana2: '',
        semana3: '',
        semana4: '',
        semana5: '',
        semana6: '',
        semana7: '',
        semana8: '',
        semana9: '',
        semana10: '',
        semana11: '',
        semana12: '',
        semana13: '',
        semana14: '',
        semana15: '',
        semana16: '',
    }

    const schema = Yup.object().shape({
        nombreJefe: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        ccJefe: Yup.string().max(20, 'CC debe ser menor a 20 caracteres').matches(idRegExp, 'CC inválido').required('Id es requerido'),
        lugarCCJefe: Yup.string().max(50, 'Lugar de exp debe ser menor a 50 caracteres').matches(lettersRegExp, 'Lugar de exp inválido').required('Lugar de exp. es requerido'),

        nombreTutor: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        ccTutor: Yup.string().max(20, 'CC debe ser menor a 20 caracteres').matches(idRegExp, 'CC inválido').required('Id es requerido'),
        lugarCCTutor: Yup.string().max(50, 'Lugar de exp debe ser menor a 50 caracteres').matches(lettersRegExp, 'Lugar de exp inválido').required('Lugar de exp. es requerido'),

        area: Yup.string().max(50, 'Area debe ser menor a 50 caracteres').matches(lettersRegExp, 'Area inválido').required('Area es requerido'),

        nombreEstudiante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        idEstudiante: Yup.string().max(20, 'CC debe ser menor a 20 caracteres').matches(idRegExp, 'ID inválido').required('Id es requerido'),
        nrcEstudiante: Yup.string().max(20, 'NRC debe ser menor a 20 caracteres').matches(idRegExp, 'NRC inválido').required('Id es requerido'),

        semana1: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 1 es requerido'),
        semana2: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 2 es requerido'),
        semana3: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 3 es requerido'),
        semana4: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 4 es requerido'),
        semana5: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 5 es requerido'),
        semana6: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 6 es requerido'),
        semana7: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 7 es requerido'),
        semana8: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 8 es requerido'),
        semana9: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 9 es requerido'),
        semana10: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 10 es requerido'),
        semana11: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 11 es requerido'),
        semana12: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 12 es requerido'),
        semana13: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 13 es requerido'),
        semana14: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 14 es requerido'),
        semana15: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 15 es requerido'),
        semana16: Yup.string().min(5, "Descripción muy corta").max(255, "Descripción muy larga").required('Semana 16 es requerido'),
    });

    const handleSubmit = async (values) => {
        const obj = { ...values };
        
        // const type = window.event.target.name;
        // console.log(type);
        downloadFile(references.planDeTrabajo, 4, obj);
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
            <div className="row form-group-row">
                <span>Jefe: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form5NombreJefe'
                        name="nombreJefe" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form5CcJefe'
                        name="ccJefe" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form5LugarCCJefe'
                        name="lugarCCJefe" 
                        placeholder="Lugar de exp" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Tutor: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form5NombreTutor'
                        name="nombreTutor" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form5CCTutor'
                        name="ccTutor" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form5LugarCCTutor'
                        name="lugarCCTutor" 
                        placeholder="Lugar de exp" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Estudiante: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form5NombreEstudiante'
                        name="nombreEstudiante" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form5IdEstudiante'
                        name="idEstudiante" 
                        placeholder="ID" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField key='form5nrcEstudiante'
                        name="nrcEstudiante" 
                        placeholder="NRC" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Semana 1: </span>
                <div className="col-12 col-lg-3">
                    <FormField key='form5Semana1Area'
                        name="area" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>
            { arrayOfWeeks.map((week, index) => (
                <div key={index} className="row form-group-row">
                    <span>{`${week}:`}</span>
                    <div className="col-12">
                        <FormFieldTextArea key={`form5descripcion${index}`}
                            name={`semana${(index + 1).toString()}`} 
                            placeholder="Descripcion" 
                            className="form-input-content"
                            type="textfield"
                            rows={3}
                            cols={90}
                            autoComplete="off"
                        />
                    </div>
                </div>
            ))}

            <SubmitButton className="form-button-content me-5" name="downloadFile5">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            {/* <SubmitButton className="form-button-content" name="printFile5">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton> */}
      </Form>
    )
}
