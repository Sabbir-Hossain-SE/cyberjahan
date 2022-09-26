import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
    display: ${(props) => (props.open ? 'block' : 'none')}; ;
`;

export const SideBarContainer = styled.div`
    min-height: 100vh;
    width: 300px;
    position: fixed;
    left: 0;
    z-index: 10;
    top: ${(props) => (props.tabView ? 0 : '86px')};
    background-color: #fff;
    box-shadow: 5px 0 5px -5px rgb(58 56 81 / 10%);
    padding: 1.8rem;
    transition: width 1s;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-type: none;
`;

export const LeftPart = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ListItem = styled.li`
    margin-top: 1.5rem;
    font-size: 1.9rem;
    font-weight: 500;
    ul {
        list-style: disc;
        list-style-type: circle;
        display: flex;
        flex-direction: column;
        padding: 1.8rem;
        padding-left: 5rem;
        gap: 2.4rem;
        transition: all 0.5s;
        li {
            cursor: pointer;
            color: ${(props) => props.color} !important;
            span {
                &:hover {
                    color: #0d6efd !important;
                }
            }
        }
    }
`;

export const ListNavigator = styled.div`
    height: 50px;
    padding: 1rem 0.8rem 1rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    &:hover {
        background-color: #f6f9ff !important;
    }
`;

export const ListIcon = styled.i`
    display: flex;
    align-items: center;
`;

export const ListText = styled.span`
    color: ${(props) => props.color} !important;
`;

export const BackDrop = styled.div`
    position: fixed;
    min-height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999999;
    margin-top: -86px;
`;
