import styled from 'styled-components';
import breakPoints from '../../theme/breakPoints';

const device = breakPoints();

const CustomButton = styled.button`
    /* height: 36px; */
    padding: 0.6rem 1.5rem;
    background-color: ${(props) => props.color};
    border: unset;
    border-radius: 4px;
    color: #fff;
    font-family: 'Shonar Bangla Bold';
    cursor: pointer;
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
        font-family: 'Inter';
        font-size: 2.2rem;
        font-weight: 500;
        padding: 0.8rem 0.8rem;
    }
`;
export default CustomButton;
