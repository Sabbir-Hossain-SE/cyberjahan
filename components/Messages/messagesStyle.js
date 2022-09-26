import styled from 'styled-components';
import { Dialog } from '../AccountInfo/accountInfoStyle';
import { List, ListIcon, ListItem, ListText } from '../SideBar/sideBarStyle';

export const MgDialog = styled(Dialog)`
    right: 0;
    min-width: 490px;
    min-height: 300px;
    top: 59px;
`;

export const DetailsContainer = styled.div`
    width: 100% !important;
    height: 100% !important;
`;
export const ActionBar = styled.div`
    display: flex;
    margin: 3rem;
    padding-left: 1rem;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.p`
    font-size: 2rem;
    line-height: 3rem;
    color: #616366;
`;

export const ViewAllButton = styled.button`
    border-radius: 30px !important;
    height: 32px;
    padding: 4px 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.2rem;
    color: #fff;
    border: none;
    outline: none;
    background-color: #0d6efd;
    cursor: pointer;
`;

export const Name = styled.div`
    font-size: 2rem;
    color: ${(props) => props.color};
    margin-bottom: 4px;
    font-weight: 500;
`;

export const Designation = styled.p`
    font-size: 1.4rem;
    color: ${(props) => props.color};
`;

export const MgList = styled(List)``;

export const MgListItem = styled(ListItem)`
    margin: 0;
    display: flex;
    border-top: 1px solid ${(props) => props.borderColor};
    align-items: center;
    padding: 1.2rem;
    cursor: pointer;
    gap: 1rem;
    color: ${(props) => props.color};
`;

export const LeftItemWrapper = styled.div``;

export const RightItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MgListIcon = styled(ListIcon)``;

export const MgListText = styled(ListText)`
    font-size: 2rem;
    line-height: 3rem;
    color: #616366;
`;

export const SeeMoreWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    border-top: 1px solid #ced4da;
`;

export const SeeMore = styled.a`
    text-decoration: underline;
    font-size: 2rem;
    line-height: 3rem;
    cursor: pointer;
    color: #616366;
`;
