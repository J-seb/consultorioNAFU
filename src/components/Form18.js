import React from 'react';
import * as Yup from 'yup';
import FormField from './forms/FormField';
import Form from './forms/Form';
import SubmitButton from './forms/SubmitButton';
import downloadFile from '../services/downloadfiles';
import references from '../utils/references';

export default function Form18() {

    const lettersRegExp = /^[a-zA-Z\s]*$/;
    const idRegExp = /^[0-9]+$/;

    const initValues = {
        nombreEstudiante: '',
        identificacionEstudiante: '',
    }

    const schema = Yup.object().shape({
        nombreEstudiante: Yup.string().max(50, 'Nombre debe ser menor a 50 caracteres').matches(lettersRegExp, 'Nombre inválido').required('Nombre es requerido'),
        identificacionEstudiante: Yup.string().max(15, 'Nombre debe ser menor a 50 caracteres').matches(idRegExp, 'Identificación inválido').required('Identificacion es requerido'),
    });

    const handleSubmit = async (values) => {
        const obj = {
            "G4": values.nombreEstudiante,
            "G5": values.identificacionEstudiante,
        }

        // const type = document.activeElement.dataset.flag;
        // console.log(type);
        downloadFile(references.anexo3, 17, obj);
        console.log('Form submitted!!!', values)
    };

    return (
        <Form
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
            <div className="row form-group-row">
                <span>Estudiante: </span>
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
                        name="identificacionEstudiante" 
                        placeholder="Identificacion" 
                        className="form-input-content"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>

            <SubmitButton className="form-button-content me-5" data-flag="downloadFile">
                <i className="fa fa-file-excel-o me-3" aria-hidden="true"></i><span>Descargar Archivo</span>
            </SubmitButton>
            {/* <SubmitButton className="form-button-content" data-flag="printFile">
                <i className="fa fa-print me-3" aria-hidden="true"></i><span>Imprimir</span>
            </SubmitButton> */}
      </Form>
    )
}
