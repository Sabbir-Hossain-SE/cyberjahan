import styled from 'styled-components';

export const Icon = styled.i`
    cursor: pointer;
    padding: 8px;
    height: fit-content;
`;

export const InputField = styled.input`
    width: 100%;
    height: 42px;
    padding: 0.8rem 1.2rem;
    border-radius: 4px;
    border-width: 1px;
    border-color: #ced4da;
    outline: none;
    &:focus {
        outline: none;
        border-color: dodgerBlue;
        box-shadow: 0 0 5px 0 dodgerBlue;
    }
`;
