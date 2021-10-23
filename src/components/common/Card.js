import React from 'react';

export default function Card({ imgSrc, fileName, className, onDownloadFile, id }) {
    return (
        <div className={`card ${className}`} onClick={onDownloadFile} id={id}>
            <img src={imgSrc} className="card-img-top h-50 mt-4" alt="..." />
            <div className="card-body">
                <h5 className="card-title title-docs">{fileName}</h5>
            </div>
        </div>
    )
}
