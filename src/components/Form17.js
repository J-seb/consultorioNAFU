import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import Select from './forms/Select';
import months from '../utils/monthString';

export default function Form17() {

    const lettersRegExp = /^[a-zA-Z\s]*$/;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const idRegExp = /^[0-9]+$/;

    const itemsCalEstudiante = [
        'Calificación Estudiante',
        'El desempeño del practicante y su conducta en general se ajustan a las normas éticas de la empresa y de Uniminuto.',
        'Es responsable con la confidencialidad de la información relacionada con su ejercicio como practicante.',
        'Cumple con los horarios establecidos para su práctica. Es puntual y responsable con su hora de llegada.',
        'Es responsable con los materiales e implementos de trabajo que le son asignados para el desarrollo de sus funciones.',
        'Su presentación personal está acorde con su rol como practicante.',
        'Demuestra adecuadas relaciones interpersonales en su sitio de práctica.',
        'Posee habilidades comunicativas en coherencia con las exigencias de su rol.',
        'Trabaja en equipo de una manera eficiente.',
        'Es receptivo a los procesos de retroalimentación de su jefe inmediato.',
        'Tiene iniciativa para el cambio, y actitud para asumir con madurez la retroalimentación de sus jefes inmediatos.',
        'Demuestra actitud proactiva en su labor.',
        'Tuvo avances y logros significativos en sus labores.',
        'Considera usted que el estudiante hace quedar bien a la institución Uniminuto en relación a valores, principios, y seres humanos íntegros.'
    ]

    const itemsCalDocente = [
        'Calificación docente',
        'Cumple con el horario acordado para las sesiones de asesoría',
        'Realiza las visitas institucionales acordadas a su sitio de práctica.',
        'Responde oportunamente a la revisión de documentos y demás productos de la práctica.',
        'Fue adecuado el tiempo que tuvo para realizar las evaluaciones del practicante.',
        'Su labor como docente, corresponde a los objetivos propuestos para la práctica y la asesoría.',
        'Ofrece informaciones y explicaciones de forma clara y comprensible.',
        'Promueve el desarrollo de habilidades para la solución de problemas y la toma de decisiones.',
        'Demuestra manejo conceptual y práctico sobre los temas que se trabajan en la asesoría.',
        'Genera espacios de reflexión y análisis sobre diferentes aspectos relacionados con la práctica.',
        'Orienta al practicante para que articule la teoría con su quehacer profesional.',
        'Considera que el docente se relaciona con el estudiante de manera respetuosa.',
        'Demuestra interés el docente para que el estudiante siga creciendo como persona.',
    ]

    const initValues = {
        nombreEstudiante: '',
        documentoEstudiante: '',

        jefeInmediato: '',
        direccion: '',
        
        empresa: '',
        nit: '',
        telEmpresa: '',

        nombreDocente: '',
        nombreCoordinador: '',
        
        fechaInicio: '',
        fechaFinal: '',

        fecha1: '',
        fecha2: '',
        fecha3: '',

        f1i1c: '',
        f2i1c: '',
        f3i1c: '',

        f1i2c: '',
        f2i2c: '',
        f3i2c: '',

        f1i3c: '',
        f2i3c: '',
        f3i3c: '',

        f1i4c: '',
        f2i4c: '',
        f3i4c: '',

        f1i5c: '',
        f2i5c: '',
        f3i5c: '',

        f1i6c: '',
        f2i6c: '',
        f3i6c: '',

        f1i7c: '',
        f2i7c: '',
        f3i7c: '',

        f1i8c: '',
        f2i8c: '',
        f3i8c: '',

        f1i9c: '',
        f2i9c: '',
        f3i9c: '',

        f1i10c: '',
        f2i10c: '',
        f3i10c: '',

        f1i11c: '',
        f2i11c: '',
        f3i11c: '',

        f1i12c: '',
        f2i12c: '',
        f3i12c: '',

        f1i13c: '',
        f2i13c: '',
        f3i13c: '',

        i1cd: '',
        i2cd: '',
        i3cd: '',
        i4cd: '',
        i5cd: '',
        i6cd: '',
        i7cd: '',
        i8cd: '',
        i9cd: '',
        i10cd: '',
        i11cd: '',
        i12cd: '',

        intensidad: '',
        
        fechaFirma: '',
    }

    const schema = Yup.object().shape({

        f1i1c: Yup.string().required('cal requerida'),
        f2i1c: Yup.string().required('cal requerida'),
        f3i1c: Yup.string().required('cal requerida'),

        f1i2c: Yup.string().required('cal requerida'),
        f2i2c: Yup.string().required('cal requerida'),
        f3i2c: Yup.string().required('cal requerida'),

        f1i3c: Yup.string().required('cal requerida'),
        f2i3c: Yup.string().required('cal requerida'),
        f3i3c: Yup.string().required('cal requerida'),

        f1i4c: Yup.string().required('cal requerida'),
        f2i4c: Yup.string().required('cal requerida'),
        f3i4c: Yup.string().required('cal requerida'),

        f1i5c: Yup.string().required('cal requerida'),
        f2i5c: Yup.string().required('cal requerida'),
        f3i5c: Yup.string().required('cal requerida'),

        f1i6c: Yup.string().required('cal requerida'),
        f2i6c: Yup.string().required('cal requerida'),
        f3i6c: Yup.string().required('cal requerida'),

        f1i7c: Yup.string().required('cal requerida'),
        f2i7c: Yup.string().required('cal requerida'),
        f3i7c: Yup.string().required('cal requerida'),

        f1i8c: Yup.string().required('cal requerida'),
        f2i8c: Yup.string().required('cal requerida'),
        f3i8c: Yup.string().required('cal requerida'),

        f1i9c: Yup.string().required('cal requerida'),
        f2i9c: Yup.string().required('cal requerida'),
        f3i9c: Yup.string().required('cal requerida'),

        f1i10c: Yup.string().required('cal requerida'),
        f2i10c: Yup.string().required('cal requerida'),
        f3i10c: Yup.string().required('cal requerida'),

        f1i11c: Yup.string().required('cal requerida'),
        f2i11c: Yup.string().required('cal requerida'),
        f3i11c: Yup.string().required('cal requerida'),

        f1i12c: Yup.string().required('cal requerida'),
        f2i12c: Yup.string().required('cal requerida'),
        f3i12c: Yup.string().required('cal requerida'),

        f1i13c: Yup.string().required('cal requerida'),
        f2i13c: Yup.string().required('cal requerida'),
        f3i13c: Yup.string().required('cal requerida'),

        i1cd: Yup.string().required('cal requerida'),
        i2cd: Yup.string().required('cal requerida'),
        i3cd: Yup.string().required('cal requerida'),
        i4cd: Yup.string().required('cal requerida'),
        i5cd: Yup.string().required('cal requerida'),
        i6cd: Yup.string().required('cal requerida'),
        i7cd: Yup.string().required('cal requerida'),
        i8cd: Yup.string().required('cal requerida'),
        i9cd: Yup.string().required('cal requerida'),
        i10cd: Yup.string().required('cal requerida'),
        i11cd: Yup.string().required('cal requerida'),
        i12cd: Yup.string().required('cal requerida'),

        intensidad: Yup.string().max(2, 'Intensidad debe ser menor a 2 dígitos').matches(idRegExp, 'Intensidad inválida').required('Intensidad es requerida'),

        fechaFirma: Yup.date().required('Fecha de firma es requerida'),
        fechaInicio: Yup.date().required('Fecha de inicio es requerida'),
        fechaFinal: Yup.date().required('Fecha de finalización es requerida'),
        fecha1: Yup.date().required('Fecha 1 es requerida'),
        fecha2: Yup.date().required('Fecha 2 requerida'),
        fecha3: Yup.date().required('Fecha 3 requerida'),

        nombreEstudiante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        documentoEstudiante: Yup.string().max(15, 'Nombre debe ser menor a 50 caracteres').matches(idRegExp, 'Identificación inválido').required('Identificacion es requerido'),
        
        jefeInmediato: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        direccion: Yup.string().max(50, 'Dirección debe tener máximo 50 caracteres').required('Dirección es requerida'),
        
        empresa: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        nit: Yup.string().max(15, 'Nombre debe ser menor a 50 caracteres').matches(idRegExp, 'NIT inválido').required('NIT es requerido'),
        telEmpresa: Yup.string().max(20, 'Teléfono debe ser menor a 20 caracteres').matches(phoneRegExp, 'Teléfono inválido').required('Teléfono es requerido'),
        
        nombreDocente: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        nombreCoordinador: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),

        
    });

    const handleSubmit = async (values) => {
        const fI = values.fechaInicio.split('-');
        const fF = values.fechaFinal.split('-');
        const fFirma = values.fechaFirma.split('-');
        const f1 = values.fecha1.split('-');
        const f2 = values.fecha1.split('-');
        const f3 = values.fecha1.split('-');

        const [f1i1c1, f1i1c2, f1i1c3] = values.f1i1c === '1' ? ['X', '', ''] : values.f1i1c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i1c1, f2i1c2, f2i1c3] = values.f2i1c === '1' ? ['X', '', ''] : values.f2i1c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i1c1, f3i1c2, f3i1c3] = values.f3i1c === '1' ? ['X', '', ''] : values.f3i1c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i2c1, f1i2c2, f1i2c3] = values.f1i2c === '1' ? ['X', '', ''] : values.f1i2c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i2c1, f2i2c2, f2i2c3] = values.f2i2c === '1' ? ['X', '', ''] : values.f2i2c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i2c1, f3i2c2, f3i2c3] = values.f3i2c === '1' ? ['X', '', ''] : values.f3i2c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i3c1, f1i3c2, f1i3c3] = values.f1i3c === '1' ? ['X', '', ''] : values.f1i3c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i3c1, f2i3c2, f2i3c3] = values.f2i3c === '1' ? ['X', '', ''] : values.f2i3c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i3c1, f3i3c2, f3i3c3] = values.f3i3c === '1' ? ['X', '', ''] : values.f3i3c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i4c1, f1i4c2, f1i4c3] = values.f1i4c === '1' ? ['X', '', ''] : values.f1i4c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i4c1, f2i4c2, f2i4c3] = values.f2i4c === '1' ? ['X', '', ''] : values.f2i4c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i4c1, f3i4c2, f3i4c3] = values.f3i4c === '1' ? ['X', '', ''] : values.f3i4c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i5c1, f1i5c2, f1i5c3] = values.f1i5c === '1' ? ['X', '', ''] : values.f1i5c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i5c1, f2i5c2, f2i5c3] = values.f2i5c === '1' ? ['X', '', ''] : values.f2i5c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i5c1, f3i5c2, f3i5c3] = values.f3i5c === '1' ? ['X', '', ''] : values.f3i5c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i6c1, f1i6c2, f1i6c3] = values.f1i6c === '1' ? ['X', '', ''] : values.f1i6c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i6c1, f2i6c2, f2i6c3] = values.f2i6c === '1' ? ['X', '', ''] : values.f2i6c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i6c1, f3i6c2, f3i6c3] = values.f3i6c === '1' ? ['X', '', ''] : values.f3i6c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i7c1, f1i7c2, f1i7c3] = values.f1i7c === '1' ? ['X', '', ''] : values.f1i7c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i7c1, f2i7c2, f2i7c3] = values.f2i7c === '1' ? ['X', '', ''] : values.f2i7c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i7c1, f3i7c2, f3i7c3] = values.f3i7c === '1' ? ['X', '', ''] : values.f3i7c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i8c1, f1i8c2, f1i8c3] = values.f1i8c === '1' ? ['X', '', ''] : values.f1i8c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i8c1, f2i8c2, f2i8c3] = values.f2i8c === '1' ? ['X', '', ''] : values.f2i8c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i8c1, f3i8c2, f3i8c3] = values.f3i8c === '1' ? ['X', '', ''] : values.f3i8c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i9c1, f1i9c2, f1i9c3] = values.f1i9c === '1' ? ['X', '', ''] : values.f1i9c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i9c1, f2i9c2, f2i9c3] = values.f2i9c === '1' ? ['X', '', ''] : values.f2i9c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i9c1, f3i9c2, f3i9c3] = values.f3i9c === '1' ? ['X', '', ''] : values.f3i9c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i10c1, f1i10c2, f1i10c3] = values.f1i10c === '1' ? ['X', '', ''] : values.f1i10c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i10c1, f2i10c2, f2i10c3] = values.f2i10c === '1' ? ['X', '', ''] : values.f2i10c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i10c1, f3i10c2, f3i10c3] = values.f3i10c === '1' ? ['X', '', ''] : values.f3i10c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i11c1, f1i11c2, f1i11c3] = values.f1i11c === '1' ? ['X', '', ''] : values.f1i11c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i11c1, f2i11c2, f2i11c3] = values.f2i11c === '1' ? ['X', '', ''] : values.f2i11c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i11c1, f3i11c2, f3i11c3] = values.f3i11c === '1' ? ['X', '', ''] : values.f3i11c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i12c1, f1i12c2, f1i12c3] = values.f1i12c === '1' ? ['X', '', ''] : values.f1i12c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i12c1, f2i12c2, f2i12c3] = values.f2i12c === '1' ? ['X', '', ''] : values.f2i12c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i12c1, f3i12c2, f3i12c3] = values.f3i12c === '1' ? ['X', '', ''] : values.f3i12c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const [f1i13c1, f1i13c2, f1i13c3] = values.f1i13c === '1' ? ['X', '', ''] : values.f1i13c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f2i13c1, f2i13c2, f2i13c3] = values.f2i13c === '1' ? ['X', '', ''] : values.f2i13c === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [f3i13c1, f3i13c2, f3i13c3] = values.f3i13c === '1' ? ['X', '', ''] : values.f3i13c === '2' ? ['', 'X', ''] : ['', '', 'X'];

        const [i1cd1, i1cd2, i1cd3] = values.i1cd === '1' ? ['X', '', ''] : values.i1cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i2cd1, i2cd2, i2cd3] = values.i2cd === '1' ? ['X', '', ''] : values.i2cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i3cd1, i3cd2, i3cd3] = values.i3cd === '1' ? ['X', '', ''] : values.i3cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i4cd1, i4cd2, i4cd3] = values.i4cd === '1' ? ['X', '', ''] : values.i4cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i5cd1, i5cd2, i5cd3] = values.i5cd === '1' ? ['X', '', ''] : values.i5cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i6cd1, i6cd2, i6cd3] = values.i6cd === '1' ? ['X', '', ''] : values.i6cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i7cd1, i7cd2, i7cd3] = values.i7cd === '1' ? ['X', '', ''] : values.i7cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i8cd1, i8cd2, i8cd3] = values.i8cd === '1' ? ['X', '', ''] : values.i8cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i9cd1, i9cd2, i9cd3] = values.i9cd === '1' ? ['X', '', ''] : values.i9cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i10cd1, i10cd2, i10cd3] = values.i10cd === '1' ? ['X', '', ''] : values.i10cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i11cd1, i11cd2, i11cd3] = values.i11cd === '1' ? ['X', '', ''] : values.i11cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        const [i12cd1, i12cd2, i12cd3] = values.i12cd === '1' ? ['X', '', ''] : values.i12cd === '2' ? ['', 'X', ''] : ['', '', 'X'];
        
        const obj = { ...values,
            fechaInicio: `${fI[2]} de ${months[Number(fI[1]) - 1]} de ${fI[0]}`,
            fechaFinal: `${fF[2]} de ${months[Number(fF[1]) - 1]} de ${fF[0]}`,

            fechaFirma: `${fFirma[2]} de ${months[Number(fFirma[1]) - 1]} de ${fFirma[0]}`,

            dIP: fI[2],
            mIP: fI[1],
            aIP: fI[0],

            dFP: fF[2],
            mFP: fF[1],
            aFP: fF[0],

            fecha1: `${f1[2]}/${f1[1]}/${f1[0]}`,
            fecha2: `${f2[2]}/${f2[1]}/${f2[0]}`,
            fecha3: `${f3[2]}/${f3[1]}/${f3[0]}`,

            f1i1c1,
            f1i1c2,
            f1i1c3,
            f2i1c1,
            f2i1c2,
            f2i1c3,
            f3i1c1,
            f3i1c2,
            f3i1c3,

            f1i2c1,
            f1i2c2,
            f1i2c3,
            f2i2c1,
            f2i2c2,
            f2i2c3,
            f3i2c1,
            f3i2c2,
            f3i2c3,

            f1i3c1,
            f1i3c2,
            f1i3c3,
            f2i3c1,
            f2i3c2,
            f2i3c3,
            f3i3c1,
            f3i3c2,
            f3i3c3,

            f1i4c1,
            f1i4c2,
            f1i4c3,
            f2i4c1,
            f2i4c2,
            f2i4c3,
            f3i4c1,
            f3i4c2,
            f3i4c3,

            f1i5c1,
            f1i5c2,
            f1i5c3,
            f2i5c1,
            f2i5c2,
            f2i5c3,
            f3i5c1,
            f3i5c2,
            f3i5c3,

            f1i6c1,
            f1i6c2,
            f1i6c3,
            f2i6c1,
            f2i6c2,
            f2i6c3,
            f3i6c1,
            f3i6c2,
            f3i6c3,

            f1i7c1,
            f1i7c2,
            f1i7c3,
            f2i7c1,
            f2i7c2,
            f2i7c3,
            f3i7c1,
            f3i7c2,
            f3i7c3,

            f1i8c1,
            f1i8c2,
            f1i8c3,
            f2i8c1,
            f2i8c2,
            f2i8c3,
            f3i8c1,
            f3i8c2,
            f3i8c3,

            f1i9c1,
            f1i9c2,
            f1i9c3,
            f2i9c1,
            f2i9c2,
            f2i9c3,
            f3i9c1,
            f3i9c2,
            f3i9c3,

            f1i10c1,
            f1i10c2,
            f1i10c3,
            f2i10c1,
            f2i10c2,
            f2i10c3,
            f3i10c1,
            f3i10c2,
            f3i10c3,

            f1i11c1,
            f1i11c2,
            f1i11c3,
            f2i11c1,
            f2i11c2,
            f2i11c3,
            f3i11c1,
            f3i11c2,
            f3i11c3,

            f1i12c1,
            f1i12c2,
            f1i12c3,
            f2i12c1,
            f2i12c2,
            f2i12c3,
            f3i12c1,
            f3i12c2,
            f3i12c3,

            f1i13c1,
            f1i13c2,
            f1i13c3,
            f2i13c1,
            f2i13c2,
            f2i13c3,
            f3i13c1,
            f3i13c2,
            f3i13c3,

            i1cd1,
            i1cd2,
            i1cd3,

            i2cd1,
            i2cd2,
            i2cd3,

            i3cd1,
            i3cd2,
            i3cd3,

            i4cd1,
            i4cd2,
            i4cd3,

            i5cd1,
            i5cd2,
            i5cd3,

            i6cd1,
            i6cd2,
            i6cd3,

            i7cd1,
            i7cd2,
            i7cd3,

            i8cd1,
            i8cd2,
            i8cd3,

            i9cd1,
            i9cd2,
            i9cd3,

            i10cd1,
            i10cd2,
            i10cd3,

            i11cd1,
            i11cd2,
            i11cd3,

            i12cd1,
            i12cd2,
            i12cd3,

        }
        const type = window.event.target.name;
        console.log(type);
        downloadFile(references.evaluacionDeProceso, 16, obj, type);
        console.log('Form submitted!!!', values)
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
            <div className="row form-group-row">
                <span>Fecha Inicio: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="fechaInicio" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Fecha Finalización: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="fechaFinal" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Fechas Cortes 1/2/3: </span>
                <div className="col-3">
                    <FormField 
                        name="fecha1" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
                <div className="col-3">
                    <FormField 
                        name="fecha2" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
                <div className="col-3">
                    <FormField 
                        name="fecha3" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Datos estudiante: </span>
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
                        name="documentoEstudiante" 
                        placeholder="Documento" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Datos Jefe: </span>
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
                <span>Dirección: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="direccion" 
                        placeholder="" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Datos empresa: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="empresa" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="nit" 
                        placeholder="NIT" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="telEmpresa" 
                        placeholder="Teléfono" 
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
                        placeholder="" 
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
                        placeholder="" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row form-group-row">
                <span>Intensidad Horaria: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="intensidad" 
                        placeholder="" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row">
                A continuación, usted encontrará una serie de ítems que tienen como fin evaluar el proceso 
                de prácticas profesionales y cada uno de los involucrados en el mismo.  Califique de 1 a 3 
                donde, 1 Insatisfecho 2 Por fortalecer 3 Satisfecho, su grado de satisfacción con respecto a los 
                siguientes aspectos del estudiante.
            </div>

            <>
                {itemsCalEstudiante.map((item, index) => (
                    <div className="row form-group-row" key={`form17${item}${index}`}>
                        <div className="col-12 col-lg-6">
                            <span>{item}</span>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-3">
                                    {index === 0 ? 
                                        <span>Fecha 1</span> :
                                        <Select name={`f1i${index}c`} className='form-input-content'>
                                            <option value="">--Cal--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Select>
                                    }
                                </div>
                                <div className="col-3">
                                    {index === 0 ? 
                                        <span>Fecha 2</span> :
                                        <Select name={`f2i${index}c`} className='form-input-content'>
                                            <option value="">--Cal--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Select>
                                    }
                                </div>
                                <div className="col-3">
                                    {index === 0 ? 
                                        <span>Fecha 3</span> :
                                        <Select name={`f3i${index}c`} className='form-input-content'>
                                            <option value="">--Cal--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Select>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
            <>
                {itemsCalDocente.map((item, index) => (
                    <div className="row form-group-row" key={`form17${item}${index}docente`}>
                        <div className="col-12 col-lg-6">
                            <span>{item}</span>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-3">
                                    {index === 0 ? 
                                        <span></span> :
                                        <Select name={`i${index}cd`} className='form-input-content'>
                                            <option value="">--Cal--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Select>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>


            <div className="row form-group-row">
                <span>Fecha de Firma: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="fechaFirma" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="date"
                        autoComplete="off"
                    />
                </div>
            </div>
            <SubmitButton className="form-button-content me-5" name="downloadFile17">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            <SubmitButton className="form-button-content" name="printFile17">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton>
      </Form>
    )
}
