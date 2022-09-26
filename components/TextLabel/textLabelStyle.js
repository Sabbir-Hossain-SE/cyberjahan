import styled from 'styled-components';
import breakPoints from '../../theme/breakPoints';

const device = breakPoints();

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 2px dotted green;
    border-color: ${(props) => props.borderColor};
    font-size: 3rem;
    line-height: 3.6rem;
    word-break: break-word;
    height: fit-content;
    @media only screen and (max-width: 1557px) {
        display: inline-block;
    }
`;

export const Title = styled.span`
    display: inline;
    color: ${(props) => props.color};
    font-family: 'Shonar Bangla Bold';
    white-space: nowrap;
    @media ${device.laptop} {
        font-family: 'Inter';
        font-size: 2.4rem;
        font-weight: 600;
    }
`;

export const Clone = styled(Title)`
    display: inline;
    padding: 0 0.8rem;
`;

export const LabelText = styled.p`
    font-size: 2.4rem;
    font-family: 'Tiro Bangla';
    font-weight: 400;
    display: inline;
    color: ${(props) => props.color};
    white-space: ${(props) => (props.nowrap ? 'nowrap' : 'normal')};
    @media ${device.laptop} {
        font-family: 'Inter';
    }
`;
