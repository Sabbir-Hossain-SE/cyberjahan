import styled from 'styled-components';

const CustomButton = styled.button`
    height: 36px;
    padding: 0.4rem 1.5rem;
    background-color: ${(props) => props.color};
    border: unset;
    border-radius: 4px;
    color: #fff;
    font-family: 'Shonar Bangla Bold';
    font-size: 2.4rem;
`;
export default CustomButton;
