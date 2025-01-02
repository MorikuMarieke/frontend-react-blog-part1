// import React from 'react';
import './Button.css';

const Button = ({type, onClick, className, buttonText}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {buttonText}
        </button>
    );
};

export default Button;