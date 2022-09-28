import styled, { keyframes } from 'styled-components';

export const LoaderWrapper = styled.div`
    background: transparent;
`;

export const LoaderContainer = styled.div`
    display: inline-block;
    font-size: 0px;
    padding: 0px;

    span:nth-child(1) {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
        background: rgba(37, 120, 255, 0.4);
    }

    span:nth-child(2) {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
        background: rgba(37, 120, 255, 0.8);
    }

    span:nth-child(3) {
        -webkit-animation-delay: -0.26666s;
        animation-delay: -0.26666s;
        background: rgba(37, 120, 255, 1);
    }

    span:nth-child(4) {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
        background: rgba(37, 120, 255, 0.8);
    }

    span:nth-child(5) {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
        background: rgba(37, 120, 255, 0.4);
    }
`;

const waveAnimation = keyframes`
 from {
        transform: scale(0, 0);
    }
    to {
        transform: scale(1, 1);
    }
`;

export const WaveNode = styled.span`
    vertical-align: middle;
    border-radius: 100%;

    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 3px 2px;
    -webkit-animation: ${waveAnimation} 0.8s linear infinite alternate;
    animation: ${waveAnimation} 0.8s linear infinite alternate;
`;
