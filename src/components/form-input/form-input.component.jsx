import React from 'react'
import '../../components/form-input/form-input.style.scss'

const FormInput = ({handleChange,label , ...others}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...others} />
            
             <label className={`${others.value.length ? 'shrink': ''} form-input-label `}>
            {label}
            </label>
        
            
        </div>
    )
}

export default FormInput
