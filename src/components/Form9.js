import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import Select from './forms/Select';
import FormFieldTextArea from './forms/FormFieldTextArea';

export default function Form9() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const initValues = {
        periodo: '',
        fecha: '',

        direccion: '',
        telefono: '',

        jefeInmediato: '',
        docente: '',

        practicante: '',
        documento: '',

        asistente1: '',
        asistente2: '',

        cumplimiento: 'pertinente',

        sobrepasaExpectativas: 'SI',
        ajustaAExpectativas: 'SI',
        noCumpleExpectativas: 'NO',

        noCumpleExpectativasJustificacion: '',
        observacionesYSugerencias: '',


    }

    const schema = Yup.object().shape({
        periodo: Yup.string().required('Periodo es requerido'),
        fecha: Yup.date().required('Fecha es requerida'),
        
        direccion: Yup.string().max(50, 'Dirección debe tener máximo 50 caracteres').required('Dirección es requerida'),
        telefono: Yup.string().max(20, 'Teléfono debe ser menor a 20 caracteres').matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        
        jefeInmediato: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        docente: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        practicante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        documento: Yup.string().max(20, 'CC debe ser menor a 20 caracteres').matches(idRegExp, 'CC inválido').required('CC es requerido'),

        asistente1: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        asistente2: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        
        cumplimiento: Yup.string(),

        sobrepasaExpectativas: Yup.string(),
        ajustaAExpectativas: Yup.string(),
        noCumpleExpectativas: Yup.string(),

        noCumpleExpectativasJustificacion: Yup.string().min(5, "Justificación muy corta").max(255, "Justificación muy larga"),
        observacionesYSugerencias: Yup.string().min(5, "Observación muy corta").max(255, "Observación muy larga"),


    });

    const handleSubmit = async (values) => {
        const date = values.fecha.split('-');
        const pertinente = values.cumplimiento === 'pertinente' ? 'X': '___';
        const adecuado = values.cumplimiento === 'adecuado' ? 'X': '___';
        const porFortalecer = values.cumplimiento === 'porFortalecer' ? 'X': '___';


        const obj = {...values,
            fecha: `${date[2]}/${date[1]}/${date[0]}`,

            pertinente,
            adecuado,
            porFortalecer,
        };
        // const type = window.event.target.name;
        // console.log(type);
        downloadFile(references.visita2, 8, obj);
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
                <span>Periodo: </span>
                <div className="col-12 col-lg-4">
                    <Select name='periodo' className='form-input-content'>
                        <option value="">--Escoja un periodo académico--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Select>
                    
                </div>
            </div>

            <div className="row form-group-row">
                <span>Direccion: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="direccion"  
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Teléfono: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="telefono" 
                        placeholder="Teléfono" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Jefe Inmediato: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="jefeInmediato" 
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
                        name="docente" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Practicante: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="practicante" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="documento" 
                        placeholder="Documento" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Asistentes: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="asistente1" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <FormField 
                        name="asistente2" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Valoración: </span>
                <div className="row">
                    <div className="col-6 my-4 d-flex align-items-center">
                        <span>Con base en la información obtenida se podría afirmar que el cumplimiento del proyecto y/o programa de trabajo a la fecha es:</span>
                    </div>
                    <div className="col-6 my-4 d-flex align-items-center">
                        <div className="row">
                            <div className='col-3 my-4 d-flex align-items-center'>
                                <span>Pertinente</span>
                            </div>
                            <div className='col-1 my-4 d-flex align-items-center'>
                                <FormField type="radio" name='cumplimiento' value="pertinente" defaultChecked/>
                            </div>
                            <div className='col-3 my-4 d-flex align-items-center'>
                                <span>Adecuado</span>
                            </div>
                            <div className='col-1 my-4 d-flex align-items-center'>
                                <FormField type="radio" name='cumplimiento' value="adecuado" />
                            </div>
                            <div className='col-3 my-4 d-flex align-items-center'>
                                <span>Por fortalecer</span>
                            </div>
                            <div className='col-1 my-4 d-flex align-items-center'>
                                <FormField type="radio" name='cumplimiento' value="porFortalecer" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 my-4 d-flex align-items-center">
                        <span>A la fecha sobrepasa las expectativas de la institución:</span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <span>SI</span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <FormField type="radio" name='sobrepasaExpectativas' value="SI" defaultChecked />
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <span>NO</span>
                    </div>
                    <div className='col-1 d-flex align-items-center'>
                        <FormField type="radio" name='sobrepasaExpectativas' value="NO" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 my-4 d-flex align-items-center">
                        <span>A la fecha se ajusta a las expectativas de la institución: </span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <span>SI</span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <FormField type="radio" name='ajustaAExpectativas' value="SI" defaultChecked />
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <span>NO</span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <FormField type="radio" name='ajustaAExpectativas' value="NO" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 my-4 d-flex align-items-center">
                        <span>A la fecha no cumple las expectativas de la institución:</span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <span>SI</span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <FormField type="radio" name='noCumpleExpectativas' value="SI" />
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <span>NO</span>
                    </div>
                    <div className='col-1 my-4 d-flex align-items-center'>
                        <FormField type="radio" name='noCumpleExpectativas' value="NO" defaultChecked />
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-6">
                        <p>Si la respuesta es NO   ¿POR QUÉ?</p>
                    </div>
                    <FormFieldTextArea
                            name="noCumpleExpectativasJustificacion"
                            placeholder="Descripcion" 
                            className="form-input-content"
                            type="textfield"
                            rows={3}
                            cols={90}
                            autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Observaciones y sugerencias: </span>
                <FormFieldTextArea
                            name="observacionesYSugerencias"
                            placeholder="Descripcion" 
                            className="form-input-content"
                            type="textfield"
                            rows={3}
                            cols={90}
                            autoComplete="off"
                />
            </div>
            

            <SubmitButton className="form-button-content me-5" name="downloadFile9">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            {/* <SubmitButton className="form-button-content" name="printFile9">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton> */}
      </Form>
    )
}
