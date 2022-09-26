import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import { Icon } from '../../styles/commonStyle';
import breakPoints from '../../theme/breakPoints';

const devices = breakPoints();

export const HeaderWrapper = styled.div``;

export const HeaderContainer = styled.div`
    height: 86px;
    padding: 1.8rem;
    background-color: #fff;
    box-shadow: 5px 0 5px -5px;
    box-shadow: 0 5px 5px -5px rgb(58 56 81 / 10%);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media ${devices.laptop} {
        flex-direction: row;
    }
`;

export const LogoContainer = styled.div`
    width: 282px;
`;

export const MenuIcon = styled(FiMenu)`
    cursor: 'pointer';
    &:hover {
        color: #0d6efd;
    }
`;

export const RightContent = styled.div`
    gap: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AlertContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`;

export const Notifications = styled.div`
    position: relative;
`;

export const NotificationCount = styled.span`
    height: 14px;
    width: 14px;
    border: unset;
    border-radius: 4px;
    background-color: red;
    font-size: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -2px;
    right: -3px;
    background-color: ${(props) => props.bgColor};
    color: #fff;
`;

export const NotificationIcon = styled(Icon)`
    font-size: 2.8rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
`;

export const Messages = styled(Notifications)``;

export const MessageCount = styled(NotificationCount)`
    background-color: ${(props) => props.bgColor};
    color: #fff;
`;

export const MessageIcon = styled(NotificationIcon)``;

export const SearchBarWrapper = styled.div`
    width: 400px;
`;
