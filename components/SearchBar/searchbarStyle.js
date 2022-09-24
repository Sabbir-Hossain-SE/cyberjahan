import styled from 'styled-components';
import { Icon, InputField } from '../../styles/commonStyle';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchIcon = styled(Icon)`
    position: absolute;
    right: 0px;
    pointer-events: none;
`;

export const SearchInputField = styled(InputField)`
    padding-right: 30px !important;
`;
