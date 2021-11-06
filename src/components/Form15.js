import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import months from '../utils/monthString';

export default function Form15() {

    const idRegExp = /^[0-9]+$/;
    const lettersRegExp = /^[a-zA-Z\s]*$/;

    const items = [
        'Item',
        'Las habilidades para el trabajo interdisciplinario del  practicante son',
        'El desempeño personal fue',
        'El grado de responsabilidad ante el proceso aprendido fue',
        'La asistencia, puntualidad, y presentación personal fue',
        'El practicante se caracteriza por su sensibilidad social.',
        'El desempeño y el dominio teórico de su disciplina es ',
        'El Desarrolla del plan de trabajo son acordes a las necesidades de la institución.',
        'Los conocimientos de los practicantes, corresponden y se ajustan a lo que requiere la entidad, al momento de aplicarlos en la práctica.',
        'La intervención al diseño, ejecución y evaluación de proyectos fue.',
        'El respeto por la dignidad de la persona.',
        'El compromiso ético con su profesión es.',
        'La actitud científica orientadora de su trabajo fue.',
        'El liderazgo en la gestión fue.',
        'Genera y aplica  estrategias innovadoras.',
        'La práctica facilita procesos significativos de transformación social.',
        'El desarrollo de la práctica permite dar respuesta a los problemas del contexto.',
        'El sitio de práctica se beneficia de los procesos investigativos desarrollados.',
        'La práctica  contribuye en la construcción de procesos de autogestión institucional.',
        'La práctica permitido vincular la academia con la realidad.',
        'El estudiante de Uniminuto, demuestra en todo su proceso de práctica un alto compromiso de proyección social con la sociedad.',
        'El estudiante de Uniminuto, demuestra en todo su proceso de práctica un alto compromiso de proyección social con el medio ambiente.',
        'El estudiante de Uniminuto, demuestra en todo su proceso de práctica un alto compromiso de proyección social con el país.',
        'Instrumentos para la evaluación de procesos institucionales.',
        'Cumplimiento de metas, indicadores y objetivos.',
        'Cartillas, manuales, libros.',
        'Proyectos de investigación.',
        'Software, videos, juegos o herramientas virtuales.',

    ]

    const initValues = {
        fecha: '',

        empresa: '',
        nit: '',
        orientador: '',

        item1: 'A',
        item2: 'A',
        item3: 'A',
        item4: 'A',
        item5: 'A',
        item6: 'A',
        item7: 'A',
        item8: 'A',
        item9: 'A',
        item10: 'A',

        item11: 'A',
        item12: 'A',
        item13: 'A',
        item14: 'A',
        item15: 'A',
        item16: 'A',
        item17: 'A',
        item18: 'A',
        item19: 'A',
        item20: 'A',
        
        item21: 'A',
        item22: 'A',
        item23: 'A',
        item24: 'A',
        item25: 'A',
        item26: 'A',
        item27: 'A',
    }

    const schema = Yup.object().shape({
        fecha: Yup.date().required('Fecha es requerida'),
        
        empresa: Yup.string().max(100).matches(lettersRegExp, 'Nombre de empresa inválido').required('Nombre de empresa es requerido'),
        nit: Yup.string().matches(idRegExp, 'NIT inválido').required('NIT es requerido'),
        orientador: Yup.string().max(100).matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
    
        item1: Yup.string(),
        item2: Yup.string(),
        item3: Yup.string(),
        item4: Yup.string(),
        item5: Yup.string(),
        item6: Yup.string(),
        item7: Yup.string(),
        item8: Yup.string(),
        item9: Yup.string(),
        item10: Yup.string(),


        item11: Yup.string(),
        item12: Yup.string(),
        item13: Yup.string(),
        item14: Yup.string(),
        item15: Yup.string(),
        item16: Yup.string(),
        item17: Yup.string(),
        item18: Yup.string(),
        item19: Yup.string(),
        item20: Yup.string(),
        
        item21: Yup.string(),
        item22: Yup.string(),
        item23: Yup.string(),
        item24: Yup.string(),
        item25: Yup.string(),
        item26: Yup.string(),
        item27: Yup.string(),
    });

    const handleSubmit = async (values) => {
        const fechaReunion = values.fecha.split('-');

        const [a1, f1] = values.item1 === 'A' ? ['X', ''] : ['', 'X'];
        const [a2, f2] = values.item2 === 'A' ? ['X', ''] : ['', 'X'];
        const [a3, f3] = values.item3 === 'A' ? ['X', ''] : ['', 'X'];
        const [a4, f4] = values.item4 === 'A' ? ['X', ''] : ['', 'X'];
        const [a5, f5] = values.item5 === 'A' ? ['X', ''] : ['', 'X'];
        const [a6, f6] = values.item6 === 'A' ? ['X', ''] : ['', 'X'];
        const [a7, f7] = values.item7 === 'A' ? ['X', ''] : ['', 'X'];
        const [a8, f8] = values.item8 === 'A' ? ['X', ''] : ['', 'X'];
        const [a9, f9] = values.item9 === 'A' ? ['X', ''] : ['', 'X'];
        const [a10, f10] = values.item10 === 'A' ? ['X', ''] : ['', 'X'];

        const [a11, f11] = values.item11 === 'A' ? ['X', ''] : ['', 'X'];
        const [a12, f12] = values.item12 === 'A' ? ['X', ''] : ['', 'X'];
        const [a13, f13] = values.item13 === 'A' ? ['X', ''] : ['', 'X'];
        const [a14, f14] = values.item14 === 'A' ? ['X', ''] : ['', 'X'];
        const [a15, f15] = values.item15 === 'A' ? ['X', ''] : ['', 'X'];
        const [a16, f16] = values.item16 === 'A' ? ['X', ''] : ['', 'X'];
        const [a17, f17] = values.item17 === 'A' ? ['X', ''] : ['', 'X'];
        const [a18, f18] = values.item18 === 'A' ? ['X', ''] : ['', 'X'];
        const [a19, f19] = values.item19 === 'A' ? ['X', ''] : ['', 'X'];

        const [a20, f20] = values.item20 === 'A' ? ['X', ''] : ['', 'X'];
        const [a21, f21] = values.item21 === 'A' ? ['X', ''] : ['', 'X'];
        const [a22, f22] = values.item22 === 'A' ? ['X', ''] : ['', 'X'];
        const [a23, f23] = values.item23 === 'A' ? ['X', ''] : ['', 'X'];
        const [a24, f24] = values.item24 === 'A' ? ['X', ''] : ['', 'X'];
        const [a25, f25] = values.item25 === 'A' ? ['X', ''] : ['', 'X'];
        const [a26, f26] = values.item26 === 'A' ? ['X', ''] : ['', 'X'];
        const [a27, f27] = values.item27 === 'A' ? ['X', ''] : ['', 'X'];
        
        const obj = { ...values,

            diaN: fechaReunion[2],
            mes: months[Number(fechaReunion[1]) - 1],
            ano: fechaReunion[0],

            a1,
            f1,

            a2,
            f2,

            a3,
            f3,

            a4,
            f4,

            a5,
            f5,

            a6,
            f6,

            a7,
            f7,

            a8,
            f8,

            a9,
            f9,

            a10,
            f10,

            a11,
            f11,

            a12,
            f12,

            a13,
            f13,

            a14,
            f14,

            a15,
            f15,

            a16,
            f16,

            a17,
            f17,

            a18,
            f18,

            a19,
            f19,

            a20,
            f20,

            a21,
            f21,

            a22,
            f22,

            a23,
            f23,

            a24,
            f24,

            a25,
            f25,

            a26,
            f26,

            a27,
            f27,
        }

        const type = window.event.target.name;
        console.log(type);
        downloadFile(references.evaluacionDeImpacto, 14, obj, type);
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
                <span>Empresa: </span>
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
            </div>

            <div className="row form-group-row">
                <span>Orientador: </span>
                <div className="col-12 col-lg-3">
                    <FormField 
                        name="orientador" 
                        placeholder="Nombre" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="row my-4">
                <p>
                    A continuación encontrará items relacionados al impacto de las prácticas.
                </p>
                <p>
                    Seleccione su opción de respuesta:  A = Adecuado  D = Por Fortalecer   
                </p>
                <p>
                Responda con sinceridad. Su opinión es muy valiosa e importante para nuestra entidad. 
                “Sus opiniones son nuestra oportunidad de mejorar la formación de nuestros estudiantes 
                para contribuir a un mejor país"
                </p>
            </div>
            
            {items.map((item, index) => (
                <div className="row my-4" key={`form15${index}`}>
                    <div className="col-10">
                        <span>{item}</span>
                    </div>
                    <div className="col-1">
                        {index === 0 ? <span>A</span>
                        : <FormField type="radio" name={`item${index + 1}`} value="A" defaultChecked/>
                        }
                    </div>
                    <div className="col-1">
                        {index === 0 ? <span>F</span>
                        : <FormField type="radio" name={`item${index + 1}`} value="F"/>
                        }
                    </div>
                </div>
            ))}
            <SubmitButton className="form-button-content me-5" name="downloadFile15">
                <i className="fa fa-file-word-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            <SubmitButton className="form-button-content" name="printFile15">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton>
      </Form>
    )
}
