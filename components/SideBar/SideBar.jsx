import React from 'react';
import { SideBarContainer, SideBarWrapper } from './sideBarStyle';

const SideBar = ({ type = 'persistent', open }) => {
    return (
        <SideBarWrapper type={(type, open)}>
            <SideBarContainer type={(type, open)}>SideBar</SideBarContainer>
        </SideBarWrapper>
    );
};

export default SideBar;
