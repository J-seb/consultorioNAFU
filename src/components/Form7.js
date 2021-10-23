import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Select from './forms/Select';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';

export default function Form7() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const itemsTabla = [
        'El practicante tiene ya formalizado y registrado su contrato de aprendizaje, contrato de trabajo y/o convenio de vinculación de práctica profesional  CONSULTORIO CONTABLE NAF',
        'El practicante ha recibido la inducción para el desarrollo de sus labores',
        'Espacio físico adecuado (Trabajo en casa por COVID- 19)',
        'Herramientas de Trabajo',
        'Conoce su Jefe Inmediato.',
        'Otros elementos necesarios (papelería, impresora, teléfono, etc.)',
        'Implementos de Seguridad Ocupacional (Si los requiere)',
        'Funciones y/o tareas a desempeñar en la organización.',
        'El practicante tiene claridad sobre los objetivos y temas del trabajo que le han sido asignados para su labor en campo de práctica.',
        'El practicante dentro de sus funciones manejará y conocerá información confidencial de la empresa, tal como documentos, claves y contraseñas, y la empresa ya tomo las medidas necesarias para que firmara acuerdo de confidencialidad (Compromiso de confidencialidad).',
        'Retroalimentación de funciones y/o tareas asignadas',
        'Respeto de condiciones inicialmente pactadas. (Apoyo económico, afiliaciones, etc.)'
    ];

    const initValues = {
        periodo: '',
        fecha: '',

        direccion: '',
        telefono: '',

        jefeInmediato: '',
        docente: '',

        practicante: '',
        documento: '',

        item1: 'si',
        item2: 'si',
        item3: 'si',
        item4: 'si',
        item5: 'si',
        item6: 'si',
        item6Afirmativo: '',
        item7: 'si',
        item8: 'si',
        item9: 'si',
        item10: 'si',
        item11: 'si',
        item12: 'si',
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

        item1: Yup.string(),
        item2: Yup.string(),
        item3: Yup.string(),
        item4: Yup.string(),
        item5: Yup.string(),
        item6: Yup.string(),

        item6Afirmativo: Yup.string().max(100, 'Descripción debe ser menor a 50 caracteres'),

        item7: Yup.string(),
        item8: Yup.string(),
        item9: Yup.string(),
        item10: Yup.string(),
        item11: Yup.string(),
        item12: Yup.string(),

    });

    const handleSubmit = async (values) => {
        const arrayFecha = values.fecha.split('-');

        const si1 = values.item1 === 'si' ? 'X' : '';
        const no1 = values.item1 === 'no' ? 'X' : '';

        const si2 = values.item2 === 'si' ? 'X' : '';
        const no2 = values.item2 === 'no' ? 'X' : '';

        const si3 = values.item3 === 'si' ? 'X' : '';
        const no3 = values.item3 === 'no' ? 'X' : '';

        const si4 = values.item4 === 'si' ? 'X' : '';
        const no4 = values.item4 === 'no' ? 'X' : '';

        const si5 = values.item5 === 'si' ? 'X' : '';
        const no5 = values.item5 === 'no' ? 'X' : '';

        const si6 = values.item6 === 'si' ? 'X' : '';
        const no6 = values.item6 === 'no' ? 'X' : '';

        const si7 = values.item7 === 'si' ? 'X' : '';
        const no7 = values.item7 === 'no' ? 'X' : '';

        const si8 = values.item8 === 'si' ? 'X' : '';
        const no8 = values.item8 === 'no' ? 'X' : '';

        const si9 = values.item9 === 'si' ? 'X' : '';
        const no9 = values.item9 === 'no' ? 'X' : '';

        const si10 = values.item10 === 'si' ? 'X' : '';
        const no10 = values.item10 === 'no' ? 'X' : '';
        
        const si11 = values.item11 === 'si' ? 'X' : '';
        const no11 = values.item11 === 'no' ? 'X' : '';

        const si12 = values.item12 === 'si' ? 'X' : '';
        const no12 = values.item12 === 'no' ? 'X' : '';

        const obj = { ...values,
            fecha: `${arrayFecha[2]}/${arrayFecha[1]}/${arrayFecha[0]}`,
            si1, no1, si2, no2, si3, no3, si4, no4, si5, no5, si6, no6,
            si7, no7, si8, no8, si9, no9, si10, no10, si11, no11, si12, no12
        };

        downloadFile(references.visita1, 6, obj);
        console.log('Form submitted!!!', values)
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
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
                <span>Fecha: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="fecha" 
                        placeholder="fecha" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
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
                <span>Telefono: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="telefono" 
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
                <div className="row my-2">
                        <div className="col-10">
                            <p>Items: </p>
                        </div>
                        <div className="col-1">
                            <p> SI </p>
                        </div>
                        <div className="col-1">
                            <p> NO </p>
                        </div>
                </div>
                {itemsTabla.map((item, index) => (
                    <div className="row my-4" key={`itemTabla${index}`}>
                        <div className="col-9">
                            <p key={`parrafo${index}`}>{item}</p>
                            {index === 5 && (
                                <span>
                                    <FormField 
                                        name="item6Afirmativo" 
                                        placeholder="¿Cuáles?" 
                                        className="form-input-content"
                                        type="text"
                                        autoComplete="off"
                                    />
                                </span>
                            )}
                        </div>
                        <div className="col-1 offset-1">
                            <FormField type="radio" id={`itemSi${index + 1}`} name={`item${index + 1}`} value="si" defaultChecked />
                        </div>
                        <div className="col-1">
                            <FormField type="radio" id={`itemNo${index + 1}`} name={`item${index + 1}`} value="no" />
                        </div>
                    </div>
                ))}
            </div>

            <SubmitButton className="form-button-content">
                Enviar
            </SubmitButton>
      </Form>
    )
}
