import styled from 'styled-components';
import { Icon } from '../../styles/commonStyle';

export const DropDownMenu = styled.div`
    position: relative;
    &:focus ul,
    &:focus-within ul {
        visibility: visible;
        opacity: 1;
        z-index: 1;
        transform: translateY(0%);
        transition-delay: 0s, 0s, 0.3s;
    }
`;

export const DropDownLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    &:hover {
        color: green;
    }
`;

export const List = styled.ul`
    visibility: hidden;
    list-style: none;
    opacity: 0;
    position: absolute;
    right: 0;
    width: 200px;
    top: 74px;
    background-color: #fff;
    transform: translateY(-2.6rem);
    z-index: -999;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0s, z-index 0s linear 0.01s;
    box-shadow: 0 3px 12px rgb(0 0 0 / 15%);
`;

export const ListItem = styled.li``;

export const UserName = styled.p`
    /* display: inline-block; */
`;

export const DownArrowIcon = styled(Icon)``;
