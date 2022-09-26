import React from 'react';
import MessagesDropdown from '../../components/Messages/Messages';
import { Container } from './formStyle';

const Form = () => {
    return (
        <Container className="page-form">
            hello form
            <MessagesDropdown />
        </Container>
    );
};

export default Form;
