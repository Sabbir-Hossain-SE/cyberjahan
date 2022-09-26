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
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 4px), calc(100% - 15px) calc(1em + 4px),
        calc(100% - -5.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    appearance: none;
    width: 93px;
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
