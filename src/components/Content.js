import React from 'react';

export default function ContentFormat({ title, description, className, children }) {
    return (
        <div className={`row ${className}`}>
            <h2 className='col-12 content-title'>{title}</h2>
            <hr />
            <p className='col-12 content-description'>{description}</p>
            <h3>Formulario</h3>
            <hr />
            <div className='col-12'>
                {children}
            </div>
        </div>
    )
}
