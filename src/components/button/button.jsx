import React from 'react';

const Button = ({name, onClick, className, children: title}) => {
    return (
    <button name={name} onClick={onClick} className={className}>{title ? title : name}</button>
    );
};

export default Button;