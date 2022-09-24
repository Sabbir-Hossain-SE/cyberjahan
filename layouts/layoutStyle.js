import styled from 'styled-components';

export const PageWrapper = styled.div`
    background-color: ${(props) => props.bgColor};
    min-height: 100vh;
`;

export const Container = styled.div`
    display: flex;
`;

export const Main = styled.div`
    margin-left: 300px;
    width: calc(100 - 300px);
`;

export const Content = styled.div``;
