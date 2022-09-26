import styled from 'styled-components';

export const PageWrapper = styled.div`
    background-color: ${(props) => props.bgColor};
    min-height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
`;

export const Main = styled.div`
    margin-left: ${(props) => (props.open ? '300px' : 0)};
    flex-grow: 1;
    /* width: calc(100 - 300px); */
`;

export const Content = styled.div``;
