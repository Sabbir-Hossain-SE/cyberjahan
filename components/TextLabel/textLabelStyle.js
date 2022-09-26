import styled from 'styled-components';

export const LabelContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 2px dotted green;
    border-color: ${(props) => props.borderColor};
    font-size: 3rem;
    line-height: 3.6rem;
`;

export const Title = styled.span`
    display: inline;
    color: ${(props) => props.color};
    font-family: 'Shonar Bangla Bold';
`;

export const Clone = styled(Title)`
    display: inline;
    padding: 0 0.8rem;
`;

export const LabelText = styled.p`
    font-size: 2.4rem;
    font-family: 'Tiro Bangla';
    font-weight: 400;
    color: ${(props) => props.color};
`;
