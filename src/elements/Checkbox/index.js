import React from 'react';

export const Checkbox = ({checked, onChange, title, name}) =>{
    return(
        <>
            <span className={`checkbox ${checked ? 'selected': ''}`} onClick={() => onChange(name)}>{title}</span>
        </>
    )
};