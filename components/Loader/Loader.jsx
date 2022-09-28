import { LoaderContainer, LoaderWrapper, WaveNode } from './loaderStyle';

const Loader = () => {
    return (
        <LoaderWrapper className="loader-wrapper">
            <LoaderContainer className="loader1">
                <WaveNode component="span" />
                <WaveNode component="span" />
                <WaveNode component="span" />
                <WaveNode component="span" />
                <WaveNode component="span" />
            </LoaderContainer>
        </LoaderWrapper>
    );
};

export default Loader;
