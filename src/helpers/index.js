import React from 'react';

export const renderInput = ({input, label, type, meta: {error, touched}}) => {//desconstructure from props
    return (
        <div className="row">
            <div className="col s12">
                <label type="text">{label}</label>
                <input {...input} type={type || 'text'} autoComplete="off" />
                <p className="red-text text-darken-2">{touched && error}</p> {/* if it's been interacted and it is erred*/}
            </div>
        </div>
    )
}