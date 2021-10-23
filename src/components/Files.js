import React from 'react';
import Card from './common/Card';
import files from '../utils/files';
import references from '../utils/references';
import downloadFile from '../services/downloadfiles';

export default function Files({ className }) {

    const getFile = ({ currentTarget }) => {
        const {id} = currentTarget;
        const refs = Object.values(references);
        downloadFile(refs[+id], +id);
    }

    const wordRoute = './images/docx_icon.svg';
    const excelRoute = './images/xlsx_icon.svg';
    return (
        <div className={`row ${className}`}>
            <div className="col-12">
                <h2>Formatos para descargar</h2>
                <hr/>
            </div>
            <div className="col-12">
                <div className="row">
                    {files.map((file, index) => (
                         <div key={`file${index.toString()}`} className="col-lg-3 m-0 p-0">
                             <Card fileName={file.name} 
                                className='card-doc' 
                                onDownloadFile={getFile}
                                id={index}
                                imgSrc={file.type === 'word' ? wordRoute : excelRoute}
                                key={`card${index.toString()}`}
                             />
                         </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
