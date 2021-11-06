import React, { useRef } from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import Select from './forms/Select';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';

export default function Form11() {

    // const [psState, setpsState] = useState('no');
    // const [vlState, setvlState] = useState('no');
    // const [epState, setepState] = useState('no');

    const ref = useRef();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const variablesEvaluación = [
        'Seleccione la calificación',
        'Capacidad de cambio y adaptación',
        'Capacidad de aprendizaje',
        'Capacidad de comunicación verbal',
        'Capacidad de comunicación escrita',
        'Capacidad para la creatividad e innovación',
        'Conocimiento de su cargo y funciones a desempeñar',
        'Trabajo en equipo',
        'Manejo de las relaciones interpersonales',
        'Respeto hacia sus superiores y su grupo de trabajo',
        'Sentido de responsabilidad',
        'Capacidad para la toma de decisiones ',
        'Puntualidad en el cumplimiento de las tareas asignadas',
        'Respeto por la cultura organizacional de la empresa',
        'Asistencia puntual al campo de práctica en los días asignados',
        'Presentación personal según el cargo o funciones a desempeñar',
        'Actitud del Servicio',
        'Tiene habilidades para liderar procesos',
        'Aplica los conocimientos adquiridos en su trabajo',
    ];

    const aspectosDiferenciadores = [
        'Seleccione la calificación',
        'Valores y Principios',
        'Responsabilidad Social',
        'Liderazgo e Iniciativa',
        'Actitud de servicio',
        'Seres humanos integrales.',
        'Etiqueta personal y laboral',
    ];

    const encuestaVinculoLaboral = [
        'El estudiante aplico y desarrollo satisfactoriamente actividades acordes a su programa',
        'La actitud, aptitud, valores, y principios del estudiante sobresalieron y logró un gran proceso de aprendizaje.',
        'El estudiante se destacó por su creatividad, liderazgo, trabajo en equipo y conocimiento en las funciones que se le asignaron.',
        'Gracias a las competencias duras (conocimientos técnicos), el desempeño del estudiante fue exitoso durante la ejecución de su práctica profesional.',
    ];

    const vincLaboral = [
        'No tengo vacantes actualmente',
        'El estudiante no cumple con ninguno de los perfiles de las vacantes disponibles',
        'Aunque fue satisfactorio su proceso durante la práctica profesional, no mostró interés por la vinculación laboral.',
        'No fue satisfactorio su desempeño en la empresa, en el desarrollo de su práctica profesional',
        'Ninguna de las anteriores'
    ];

    const ejecPracticas = [
        'No teníamos información en la empresa, de que me servían para cumplimiento de cuota.',
        'No fue fácil el contacto telefónico, ni virtual',
        'No conté con acompañamiento de UNIMINUTO durante el Proceso',
        'Los estudiantes no cumplieron con los requisitos de la empresa, para este tipo de vinculación.',
        'La universidad no tiene las especialidades requeridas por la empresa para ejecutar las prácticas profesionales',
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

        asistente1: '',
        asistente2: '',

        itemV1: '5',
        itemV2: '5',
        itemV3: '5',
        itemV4: '5',
        itemV5: '5',

        itemV6: '5',
        itemV7: '5',
        itemV8: '5',
        itemV9: '5',
        itemV10: '5',

        itemV11: '5',
        itemV12: '5',
        itemV13: '5',
        itemV14: '5',
        itemV15: '5',

        itemV16: '5',
        itemV17: '5',
        itemV18: '5',
        itemA1: '5',
        itemA2: '5',

        itemA3: '5',
        itemA4: '5',
        itemA5: '5',
        itemA6: '5',

        ps: 'no',

        psO1: '',
        psO2: '',
        psO3: '',
        psO4: '',

        vl: 'no',

        vlO1: '',
        vlO2: '',
        vlO3: '',
        vlO4: '',
        vlO5: '',

        ep: 'no',

        epO1: '',
        epO2: '',
        epO3: '',
        epO4: '',
        epO5: '',

    };

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
        
        itemV1: Yup.string(),
        itemV2: Yup.string(),
        itemV3: Yup.string(),
        itemV4: Yup.string(),
        itemV5: Yup.string(),
        itemV6: Yup.string(),
        itemV7: Yup.string(),
        itemV8: Yup.string(),
        itemV9: Yup.string(),
        itemV10: Yup.string(),

        itemV11: Yup.string(),
        itemV12: Yup.string(),
        itemV13: Yup.string(),
        itemV14: Yup.string(),
        itemV15: Yup.string(),
        itemV16: Yup.string(),
        itemV17: Yup.string(),
        itemV18: Yup.string(),
        itemA1: Yup.string(),
        itemA2: Yup.string(),

        itemA3: Yup.string(),
        itemA4: Yup.string(),
        itemA5: Yup.string(),
        itemA6: Yup.string(),


        ps: Yup.string(),

        psO1: Yup.string(),
        psO2: Yup.string(),
        psO3: Yup.string(),
        psO4: Yup.string(),

        vl: Yup.string(),

        vlO1: Yup.string(),
        vlO2: Yup.string(),
        vlO3: Yup.string(),
        vlO4: Yup.string(),
        vlO5: Yup.string(),

        ep: Yup.string(),

        epO1: Yup.string(),
        epO2: Yup.string(),
        epO3: Yup.string(),
        epO4: Yup.string(),
        epO5: Yup.string(),

    });

    const handleSubmit = async (values) => {
        const fechaEntrada = values.fecha.split('-');
        const item1C1 = values.itemV1 === '1' ? 'X' : '';
        const item1C2 = values.itemV1 === '2' ? 'X' : '';
        const item1C3 = values.itemV1 === '3' ? 'X' : '';
        const item1C4 = values.itemV1 === '4' ? 'X' : '';
        const item1C5 = values.itemV1 === '5' ? 'X' : '';

        const item2C1 = values.itemV2 === '1' ? 'X' : '';
        const item2C2 = values.itemV2 === '2' ? 'X' : '';
        const item2C3 = values.itemV2 === '3' ? 'X' : '';
        const item2C4 = values.itemV2 === '4' ? 'X' : '';
        const item2C5 = values.itemV2 === '5' ? 'X' : '';

        const item3C1 = values.itemV3 === '1' ? 'X' : '';
        const item3C2 = values.itemV3 === '2' ? 'X' : '';
        const item3C3 = values.itemV3 === '3' ? 'X' : '';
        const item3C4 = values.itemV3 === '4' ? 'X' : '';
        const item3C5 = values.itemV3 === '5' ? 'X' : '';

        const item4C1 = values.itemV4 === '1' ? 'X' : '';
        const item4C2 = values.itemV4 === '2' ? 'X' : '';
        const item4C3 = values.itemV4 === '3' ? 'X' : '';
        const item4C4 = values.itemV4 === '4' ? 'X' : '';
        const item4C5 = values.itemV4 === '5' ? 'X' : '';

        const item5C1 = values.itemV5 === '1' ? 'X' : '';
        const item5C2 = values.itemV5 === '2' ? 'X' : '';
        const item5C3 = values.itemV5 === '3' ? 'X' : '';
        const item5C4 = values.itemV5 === '4' ? 'X' : '';
        const item5C5 = values.itemV5 === '5' ? 'X' : '';

        const item6C1 = values.itemV6 === '1' ? 'X' : '';
        const item6C2 = values.itemV6 === '2' ? 'X' : '';
        const item6C3 = values.itemV6 === '3' ? 'X' : '';
        const item6C4 = values.itemV6 === '4' ? 'X' : '';
        const item6C5 = values.itemV6 === '5' ? 'X' : '';

        const item7C1 = values.itemV7 === '1' ? 'X' : '';
        const item7C2 = values.itemV7 === '2' ? 'X' : '';
        const item7C3 = values.itemV7 === '3' ? 'X' : '';
        const item7C4 = values.itemV7 === '4' ? 'X' : '';
        const item7C5 = values.itemV7 === '5' ? 'X' : '';

        const item8C1 = values.itemV8 === '1' ? 'X' : '';
        const item8C2 = values.itemV8 === '2' ? 'X' : '';
        const item8C3 = values.itemV8 === '3' ? 'X' : '';
        const item8C4 = values.itemV8 === '4' ? 'X' : '';
        const item8C5 = values.itemV8 === '5' ? 'X' : '';

        const item9C1 = values.itemV9 === '1' ? 'X' : '';
        const item9C2 = values.itemV9 === '2' ? 'X' : '';
        const item9C3 = values.itemV9 === '3' ? 'X' : '';
        const item9C4 = values.itemV9 === '4' ? 'X' : '';
        const item9C5 = values.itemV9 === '5' ? 'X' : '';

        const item10C1 = values.itemV10 === '1' ? 'X' : '';
        const item10C2 = values.itemV10 === '2' ? 'X' : '';
        const item10C3 = values.itemV10 === '3' ? 'X' : '';
        const item10C4 = values.itemV10 === '4' ? 'X' : '';
        const item10C5 = values.itemV10 === '5' ? 'X' : '';

        const item11C1 = values.itemV11 === '1' ? 'X' : '';
        const item11C2 = values.itemV11 === '2' ? 'X' : '';
        const item11C3 = values.itemV11 === '3' ? 'X' : '';
        const item11C4 = values.itemV11 === '4' ? 'X' : '';
        const item11C5 = values.itemV11 === '5' ? 'X' : '';

        const item12C1 = values.itemV12 === '1' ? 'X' : '';
        const item12C2 = values.itemV12 === '2' ? 'X' : '';
        const item12C3 = values.itemV12 === '3' ? 'X' : '';
        const item12C4 = values.itemV12 === '4' ? 'X' : '';
        const item12C5 = values.itemV12 === '5' ? 'X' : '';

        const item13C1 = values.itemV13 === '1' ? 'X' : '';
        const item13C2 = values.itemV13 === '2' ? 'X' : '';
        const item13C3 = values.itemV13 === '3' ? 'X' : '';
        const item13C4 = values.itemV13 === '4' ? 'X' : '';
        const item13C5 = values.itemV13 === '5' ? 'X' : '';

        const item14C1 = values.itemV14 === '1' ? 'X' : '';
        const item14C2 = values.itemV14 === '2' ? 'X' : '';
        const item14C3 = values.itemV14 === '3' ? 'X' : '';
        const item14C4 = values.itemV14 === '4' ? 'X' : '';
        const item14C5 = values.itemV14 === '5' ? 'X' : '';

        const item15C1 = values.itemV15 === '1' ? 'X' : '';
        const item15C2 = values.itemV15 === '2' ? 'X' : '';
        const item15C3 = values.itemV15 === '3' ? 'X' : '';
        const item15C4 = values.itemV15 === '4' ? 'X' : '';
        const item15C5 = values.itemV15 === '5' ? 'X' : '';

        const item16C1 = values.itemV16 === '1' ? 'X' : '';
        const item16C2 = values.itemV16 === '2' ? 'X' : '';
        const item16C3 = values.itemV16 === '3' ? 'X' : '';
        const item16C4 = values.itemV16 === '4' ? 'X' : '';
        const item16C5 = values.itemV16 === '5' ? 'X' : '';

        const item17C1 = values.itemV17 === '1' ? 'X' : '';
        const item17C2 = values.itemV17 === '2' ? 'X' : '';
        const item17C3 = values.itemV17 === '3' ? 'X' : '';
        const item17C4 = values.itemV17 === '4' ? 'X' : '';
        const item17C5 = values.itemV17 === '5' ? 'X' : '';

        const item18C1 = values.itemV18 === '1' ? 'X' : '';
        const item18C2 = values.itemV18 === '2' ? 'X' : '';
        const item18C3 = values.itemV18 === '3' ? 'X' : '';
        const item18C4 = values.itemV18 === '4' ? 'X' : '';
        const item18C5 = values.itemV18 === '5' ? 'X' : '';
        
        const item19C1 = values.itemA1 === '1' ? 'X' : '';
        const item19C2 = values.itemA1 === '2' ? 'X' : '';
        const item19C3 = values.itemA1 === '3' ? 'X' : '';
        const item19C4 = values.itemA1 === '4' ? 'X' : '';
        const item19C5 = values.itemA1 === '5' ? 'X' : '';

        const item20C1 = values.itemA2 === '1' ? 'X' : '';
        const item20C2 = values.itemA2 === '2' ? 'X' : '';
        const item20C3 = values.itemA2 === '3' ? 'X' : '';
        const item20C4 = values.itemA2 === '4' ? 'X' : '';
        const item20C5 = values.itemA2 === '5' ? 'X' : '';

        const item21C1 = values.itemA3 === '1' ? 'X' : '';
        const item21C2 = values.itemA3 === '2' ? 'X' : '';
        const item21C3 = values.itemA3 === '3' ? 'X' : '';
        const item21C4 = values.itemA3 === '4' ? 'X' : '';
        const item21C5 = values.itemA3 === '5' ? 'X' : '';

        const item22C1 = values.itemA4 === '1' ? 'X' : '';
        const item22C2 = values.itemA4 === '2' ? 'X' : '';
        const item22C3 = values.itemA4 === '3' ? 'X' : '';
        const item22C4 = values.itemA4 === '4' ? 'X' : '';
        const item22C5 = values.itemA4 === '5' ? 'X' : '';

        const item23C1 = values.itemA5 === '1' ? 'X' : '';
        const item23C2 = values.itemA5 === '2' ? 'X' : '';
        const item23C3 = values.itemA5 === '3' ? 'X' : '';
        const item23C4 = values.itemA5 === '4' ? 'X' : '';
        const item23C5 = values.itemA5 === '5' ? 'X' : '';

        const item24C1 = values.itemA6 === '1' ? 'X' : '';
        const item24C2 = values.itemA6 === '2' ? 'X' : '';
        const item24C3 = values.itemA6 === '3' ? 'X' : '';
        const item24C4 = values.itemA6 === '4' ? 'X' : '';
        const item24C5 = values.itemA6 === '5' ? 'X' : '';

        const [psSi, psNo] = values.ps === 'si' ? ['X', ''] : ['', 'X'];
        const [vlSi, vlNo] = values.vl === 'si' ? ['X', ''] : ['', 'X'];
        const [epSi, epNo] = values.ps === 'si' ? ['X', ''] : ['', 'X'];

        const obj = { ...values,
            fecha: `${fechaEntrada[2]}/${fechaEntrada[1]}/${fechaEntrada[0]}/`,
            item1C1,
            item1C2,
            item1C3,
            item1C4,
            item1C5,
    
            item2C1,
            item2C2,
            item2C3,
            item2C4,
            item2C5,
    
            item3C1,
            item3C2,
            item3C3,
            item3C4,
            item3C5,
    
            item4C1,
            item4C2,
            item4C3,
            item4C4,
            item4C5,
    
            item5C1,
            item5C2,
            item5C3,
            item5C4,
            item5C5,
    
            item6C1,
            item6C2,
            item6C3,
            item6C4,
            item6C5,
    
            item7C1,
            item7C2,
            item7C3,
            item7C4,
            item7C5,
    
            item8C1,
            item8C2,
            item8C3,
            item8C4,
            item8C5,
    
            item9C1,
            item9C2,
            item9C3,
            item9C4,
            item9C5,
    
            item10C1,
            item10C2,
            item10C3,
            item10C4,
            item10C5,
    
            item11C1,
            item11C2,
            item11C3,
            item11C4,
            item11C5,
    
            item12C1,
            item12C2,
            item12C3,
            item12C4,
            item12C5,
    
            item13C1,
            item13C2,
            item13C3,
            item13C4,
            item13C5,
    
            item14C1,
            item14C2,
            item14C3,
            item14C4,
            item14C5,
    
            item15C1,
            item15C2,
            item15C3,
            item15C4,
            item15C5,
    
            item16C1,
            item16C2,
            item16C3,
            item16C4,
            item16C5,
    
            item17C1,
            item17C2,
            item17C3,
            item17C4,
            item17C5,
    
            item18C1,
            item18C2,
            item18C3,
            item18C4,
            item18C5,
            
            item19C1,
            item19C2,
            item19C3,
            item19C4,
            item19C5,
    
            item20C1,
            item20C2,
            item20C3,
            item20C4,
            item20C5,
    
            item21C1,
            item21C2,
            item21C3,
            item21C4,
            item21C5,
    
            item22C1,
            item22C2,
            item22C3,
            item22C4,
            item22C5,
    
            item23C1,
            item23C2,
            item23C3,
            item23C4,
            item23C5,
    
            item24C1,
            item24C2,
            item24C3,
            item24C4,
            item24C5,

            psSi,
            psNo,
            vlSi,
            vlNo,
            epSi,
            epNo,
        
        };
        const type = window.event.target.name;
        console.log(type);
        downloadFile(references.visita3, 10, obj, type);
        console.log('Form submitted!!!', values)
    };

    return (
        <Form
        innerRef = {ref}
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
            <div className="row form-group-row mb-5">
                <span>Variables de Evaluación: </span>
                {variablesEvaluación.map((varEval, index) => (
                    <div className="row">
                        <div className="col-7 my-4 d-flex align-items-center">
                            <span>{varEval}</span>
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>1</span> : 
                                <FormField type="radio" name={`itemV${index}`} value="1"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>2</span> : 
                                <FormField type="radio" name={`itemV${index}`} value="2"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>3</span> : 
                                <FormField type="radio" name={`itemV${index}`} value="3"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>4</span> : 
                                <FormField type="radio" name={`itemV${index}`} value="4"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>5</span> : 
                                <FormField type="radio" name={`itemV${index}`} value="5" defaultChecked/>
                            }
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="row form-group-row">
                <span>Aspectos diferenciadores estudiante componente UNIMINUTO: </span>
                {aspectosDiferenciadores.map((varEval, index) => (
                    <div className="row">
                        <div className="col-7 my-4 d-flex align-items-center">
                            <span>{varEval}</span>
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>1</span> : 
                                <FormField type="radio" name={`itemA${Number(index)}`} value="1"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>2</span> : 
                                <FormField type="radio" name={`itemA${index}`} value="2"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>3</span> : 
                                <FormField type="radio" name={`itemA${index}`} value="3"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>4</span> : 
                                <FormField type="radio" name={`itemA${index}`} value="4"/>
                            }
                        </div>
                        <div className='col-1 my-4 d-flex align-items-center justify-content-center'>
                            {index === 0 ?
                                <span>5</span> : 
                                <FormField type="radio" name={`itemA${index}`} value="5" defaultChecked/>
                            }
                        </div>
                    </div>
                ))}
            </div>

            <div className="row">
                <span>Encuesta Vínculo Laboral</span>
            </div> 

            <div className="row form-group-row">
                <div className="col-8 my-4 d-flex align-items-center">
                    <span>Considera satisfactorio el proceso del estudiante durante la ejecución de la práctica profesional? </span>
                </div>
                <div className='col-2 my-4 d-flex align-items-center justify-content-center'>
                        <span className="mx-5">Si</span>
                        <FormField type="radio" name='ps' value="si"/>
                </div>
                <div className='col-2 my-4 d-flex align-items-center justify-content-center'>
                        <span className="mx-5">No</span> : 
                        <FormField type="radio" name='ps' value="no" defaultChecked/>
                </div>
            </div>

            <div className="row">
                <span>Si su respuesta es Si, marque las opciones que considere pertinentes</span>
            </div>

            <div className="row form-group-row">
                {encuestaVinculoLaboral.map((item, index) => (
                    <div className='row my-4 d-flex align-items-center justify-content-center' key={`psO${index}`}>
                        <div className="col-11">
                            <span>{item}</span>
                        </div>
                        <div className="col-1">
                            <FormField type="checkbox" name={`psO${index + 1}`} value="X"/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row form-group-row">
                <div className="col-8 my-4 d-flex align-items-center">
                    <span>¿Vinculará o promoverá laboralmente a este aprendiz una vez culmine su etapa productiva? </span>
                </div>
                <div className='col-2 my-4 d-flex align-items-center justify-content-center'>
                        <span className="mx-5">Si</span>
                        <FormField type="radio" name='vl' value="si" defaultChecked/>
                </div>
                <div className='col-2 my-4 d-flex align-items-center justify-content-center'>
                        <span className="mx-5">No</span> : 
                        <FormField type="radio" name='vl' value="no"/>
                </div>
            </div>

            <div className="row">
                <span>Si su respuesta es No, marque las opciones que considere pertinentes</span>
            </div>

            <div className="row form-group-row">
                {vincLaboral.map((item, index) => (
                    <div className='row my-4 d-flex align-items-center justify-content-center' key={`vlO${index}`}>
                        <div className="col-11">
                            <span>{item}</span>
                        </div>
                        <div className="col-1">
                            <FormField type="checkbox" name={`vlO${index + 1}`} value="X"/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row form-group-row">
                <div className="col-8 my-4 d-flex align-items-center">
                    <span>¿Fue fácil la búsqueda, atención y ejecución de prácticas profesionales con los estudiantes de Uniminuto?</span>
                </div>
                <div className='col-2 my-4 d-flex align-items-center justify-content-center'>
                        <span className="mx-5">Si</span>
                        <FormField type="radio" name='ep' value="si" defaultChecked/>
                </div>
                <div className='col-2 my-4 d-flex align-items-center justify-content-center'>
                        <span className="mx-5">No</span> : 
                        <FormField type="radio" name='ep' value="no"/>
                </div>
            </div>

            <div className="row">
                <span>Si su respuesta es No, marque las opciones que considere pertinentes</span>
            </div> 

            <div className="row form-group-row">
                {ejecPracticas.map((item, index) => (
                    <div className='row my-4 d-flex align-items-center justify-content-center' key={`epO${index}`}>
                        <div className="col-11">
                            <span>{item}</span>
                        </div>
                        <div className="col-1">
                            <FormField type="checkbox" name={`epO${index + 1}`} value="X"/>
                        </div>
                    </div>
                ))}
            </div>

            <SubmitButton className="form-button-content me-5" name="downloadFile11">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            <SubmitButton className="form-button-content" name="printFile11">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton>
      </Form>
    )
}
