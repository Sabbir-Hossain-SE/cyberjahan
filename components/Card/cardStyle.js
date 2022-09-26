import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    padding: 2rem 2.8rem 3rem 2.8rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.borderColor};
    background-color: ${(props) => props.bgColor};
    border-radius: 8px;
    width: 100%;
`;

export const CardBadge = styled.div`
    position: absolute;
    height: 2.4rem;
    padding: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bgColor};
    border-radius: 0 8px;
    right: -2px;
    top: -2px;
    color: ${(props) => props.color};
    font-family: 'Shonar Bangla Bold';
    font-size: 1.4rem;
    line-height: 2rem;
`;
