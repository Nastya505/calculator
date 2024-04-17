import React from 'react';

const Input = ({value, className}) => {
    return (
        <form>
            <input className={className} type="text" value={value} />
        </form>
    );
};

export default Input;