import React from 'react'
import '../../components/custom-button/custom-button.style.scss';

const CustomButton = ({children, inverted,...others}) => {
    return (
    
     <button className={ `${inverted ? 'inverted' : ''} custom-button`} {...others}>
     {children}
     </button>
    )
}

export default CustomButton
