import React, { useState } from 'react';
import * as Yup from 'yup';
import FormFieldTextArea from './forms/FormFieldTextArea';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';
import { getBase64 } from '../utils/getBase64Url';

export default function Form6() {

    const [arrayOfFiles, setArrayOfFiles] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);

    const semanas = [
        'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 
        'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10', 'Semana 11', 'Semana 12', 
        'Semana 13', 'Semana 14', 'Semana 15', 'Semana 16'
    ]

    const initValues = {
        planTrabajoSemana1: '',
        ejecucionSemana1: '',

        planTrabajoSemana2: '',
        ejecucionSemana2: '',
        
        planTrabajoSemana3: '',
        ejecucionSemana3: '',
        
        planTrabajoSemana4: '',
        ejecucionSemana4: '',
        
        planTrabajoSemana5: '',
        ejecucionSemana5: '',
        
        planTrabajoSemana6: '',
        ejecucionSemana6: '',
        
        planTrabajoSemana7: '',
        ejecucionSemana7: '',
        
        planTrabajoSemana8: '',
        ejecucionSemana8: '',
        
        planTrabajoSemana9: '',
        ejecucionSemana9: '',
        
        planTrabajoSemana10: '',
        ejecucionSemana10: '',
        
        planTrabajoSemana11: '',
        ejecucionSemana11: '',
        
        planTrabajoSemana12: '',
        ejecucionSemana12: '',
        
        planTrabajoSemana13: '',
        ejecucionSemana13: '',
        
        planTrabajoSemana14: '',
        ejecucionSemana14: '',
        
        planTrabajoSemana15: '',
        ejecucionSemana15: '',
        
        planTrabajoSemana16: '',
        ejecucionSemana16: '',

    }

    const schema = Yup.object().shape({

        planTrabajoSemana1: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana1: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana2: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana2: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),

        planTrabajoSemana3: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana3: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana4: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana4: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana5: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana5: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana6: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana6: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana7: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana7: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana8: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana8: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana9: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana9: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana10: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana10: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana11: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana11: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana12: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana12: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana13: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana13: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana14: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana14: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana15: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana15: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        planTrabajoSemana16: Yup.string().max(255, 'Plan excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        ejecucionSemana16: Yup.string().max(255, 'Ejecución excede su máxima capacidad de 255 caracteres').required('Plan es requerido'),
        
        
    });

    const handleSubmit = async (values) => {

        console.log(arrayOfFiles);
        const obj = { ...values,
            foto1: arrayOfFiles[0],
            foto2: arrayOfFiles[1],
            foto3: arrayOfFiles[2],
            foto4: arrayOfFiles[3],
            foto5: arrayOfFiles[4],
            foto6: arrayOfFiles[5],
            foto7: arrayOfFiles[6],
            foto8: arrayOfFiles[7],
            foto9: arrayOfFiles[8],
            foto10: arrayOfFiles[9],
            foto11: arrayOfFiles[10],
            foto12: arrayOfFiles[11],
            foto13: arrayOfFiles[12],
            foto14: arrayOfFiles[13],
            foto15: arrayOfFiles[14],
            foto16: arrayOfFiles[15],
        };

        downloadFile(references.informeDeEjecucion, 5, obj, true);
        console.log('Form submitted!!!', obj)
    };

    const setImages = async (event) => {
        const { id } = event.target;

        const index = Number(id.replace('foto', ''));

        const file = event.target.files[0];
        const base64 = await getBase64(file);

        const myFilesLoaded = [...arrayOfFiles];
        myFilesLoaded[index] = base64;

        setArrayOfFiles(myFilesLoaded);
    }

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
            { semanas.map((semana, index) => (
                <div key={index} className="row form-group-row">
                    <span>{semana}: </span>
                    <div className="col-12 col-lg-6">
                        <FormFieldTextArea key={`form6plan${index.toString()}`}
                            name={`planTrabajoSemana${index + 1}`}
                            placeholder="Plan" 
                            className="form-input-content"
                            type="text"
                            autoComplete="off"
                        />
                    </div>

                    <div className="col-12 col-lg-6">
                        <FormFieldTextArea key={`form6ejecucion${index.toString()}`}
                            name={`ejecucionSemana${index + 1}`}
                            placeholder="Ejecución" 
                            className="form-input-content"
                            type="text"
                            autoComplete="off"
                        />
                    </div>

                    <div className="col-12 col-lg-12 my-4">
                        <label htmlFor={`foto${index + 1}`}>{`Registro ${index + 1}`}</label>
                        <input name={`foto${index + 1}`} type="file" id={`foto${index}`}
                            onChange={(event) => setImages(event)}
                        />
                    </div>
                </div>
            ))}
            
            <SubmitButton className="form-button-content">
                Enviar
            </SubmitButton>
      </Form>
    )
}
