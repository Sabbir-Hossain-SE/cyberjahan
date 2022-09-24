import React from 'react';
import Input from './inputFieldStyle';

const InputField = ({ type = 'text', ...rest }) => {
    return <Input type={type} {...rest} />;
};

export default InputField;
