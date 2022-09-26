import styled from 'styled-components';
import { List, ListIcon, ListItem, ListText } from '../SideBar/sideBarStyle';

export const DetailsContainer = styled.div`
    width: 100% !important;
    height: 100% !important;
`;

export const UserDetails = styled.div`
    padding: 3rem 2rem 2rem 1rem;
    text-align: center;
`;

export const Name = styled.div`
    font-size: 2rem;
    color: ${(props) => (props.color ? props.color : '#363636')};
    margin-bottom: 4px;
    font-weight: 500;
`;

export const Designation = styled.p`
    font-size: 1.4rem;
    color: ${(props) => props.color};
`;

export const AdList = styled(List)``;

export const AdListItem = styled(ListItem)`
    margin: 0;
    display: flex;
    border-top: 1px solid ${(props) => props.borderColor};
    align-items: center;
    padding: 1.2rem;
    cursor: pointer;
    gap: 1rem;
    color: ${(props) => props.color};
`;

export const AdListIcon = styled(ListIcon)``;

export const AdListText = styled(ListText)`
    font-size: 1.9rem;
`;
