import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 140px;
    width: 100%;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    border-top: 1px solid transparent;
    border-top-color: ${(props) => props.borderColor};
`;

export const FooterText = styled.p`
    display: inline-block;
    text-align: center;
    font-size: 2rem;
    line-height: 3.2rem;
    width: 520px;
    color: ${(props) => props.color};
`;
