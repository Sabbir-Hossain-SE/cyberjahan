import styled from 'styled-components';

export const SelectBox = styled.select`
    box-sizing: border-box;
    height: 42px;
    background: transparent;
    border-radius: 4px;
    outline: none;
    padding: 0 10px 0 10px;
    cursor: pointer;
    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none; */
    border-radius: 4px;
    border-width: 1px;
    border-color: #ced4da;
    outline: none;
    &:focus {
        border-color: dodgerBlue;
        box-shadow: 0 0 5px 0 dodgerBlue;
    }
`;
export const Option = styled.option`
    position: absolute;
    top: 100px;
`;
