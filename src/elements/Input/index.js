import React from 'react';

export const Input = ({value, onChange, title, name, id}) =>{
    return(
        <>
            <label htmlFor={id}>{title}</label>
            <input id={id} type="text" onChange={onChange} />
        </>
    )
};