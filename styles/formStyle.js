import styled from 'styled-components';
import breakpoints from '../theme/breakPoints';

const device = breakpoints();

export const FormWrapper = styled.div`
    width: calc(100% - 300px);
`;

export const FormContainer = styled.div`
    width: 100%;
    padding: 3.5rem 4rem;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Branding = styled.div`
    margin-bottom: 1rem;
`;

export const HeroWrapper = styled.div`
    width: 100%;
    margin-bottom: 4.8rem;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.div`
    width: 464px;
    font-family: 'Shonar Bangla Bold';
    font-size: 5.2rem;
    text-align: center;
    line-height: 4.6rem;
    color: ${(props) => props.color};
    @media ${device.laptop} {
        width: 100%;
        line-height: unset;
    }
`;

export const Typography = styled.p`
    @media ${device.laptop} {
        padding: 0 2rem;
    }
`;

export const VersionUpdatedDate = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 4rem;
    margin-bottom: -12px;
    font-family: 'Tiro Bangla';
    font-size: 2rem;
    color: ${(props) => props.color};
    @media ${device.laptop} {
        display: none;
    }
`;

export const FlexBox = styled.div`
    width: 100%;
    margin-top: 2.8rem;
    display: flex;
    gap: 2rem;
    flex-direction: row;
    @media ${device.laptop} {
        flex-direction: ${(props) => (props.direction == 'row' ? 'row' : 'column')};
        font-family: 'Inter';
    }
`;

export const InputWrapper = styled.div`
    input {
        margin-top: 2px;
        height: 24px;
        width: 24px;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        justify-content: center;
        padding: 0 13%;
    }
`;

export const TermsCondition = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    gap: 1.5rem;
`;

export const Message = styled.div`
    font-size: 3rem;
    font-family: 'Shonar Bangla Bold';
    line-height: 3.2rem;
    @media ${device.laptop} {
        font-family: 'Inter';
        font-size: 2.4rem;
    }
`;

export const SubmittedStatus = styled.div`
    font-size: 2.2rem;
    font-family: 'Tiro Bangla';
    font-weight: 400;
    margin-top: 3rem;
    margin-bottom: -16px;
    text-align: center;
    color: ${(props) => props.color};
    @media ${device.laptop} {
        font-family: 'Inter';
    }
    @media ${device.tablet} {
        font-family: 'Inter';
        font-size: 2rem;
        color: #0d6efd;
    }
`;
