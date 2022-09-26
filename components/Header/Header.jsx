import Image from 'next/image';
import React from 'react';
import { VscBell } from 'react-icons/vsc';
import { useTheme } from 'styled-components';
import brandLogo from '../../public/logo.jpg';
import { Icon } from '../../styles/commonStyle';
import AccountInfo from '../AccountInfo/AccountInfo';
import LanguageDropDown from '../LanguageSelection/LanguageDropDown';
import MessagesDropdown from '../Messages/Messages';
import SearchBar from '../SearchBar/SearchBar.';
import {
    AlertContainer,
    HeaderContainer,
    LeftContent,
    LogoContainer,
    MenuIcon,
    NotificationCount,
    NotificationIcon,
    Notifications,
    RightContent,
    SearchBarWrapper
} from './headerStyle';

const Header = ({ setIsSideBarOpen }) => {
    const { palette } = useTheme();

    const handleSideBar = () => {
        setIsSideBarOpen((prev) => !prev);
    };

    return (
        <HeaderContainer color={palette}>
            <LeftContent>
                <LogoContainer>
                    <Image src={brandLogo} alt="logo" width={200} height={42} />
                </LogoContainer>
                <Icon>
                    <MenuIcon onClick={handleSideBar} fontSize={24} />
                </Icon>
            </LeftContent>
            <RightContent>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>
                <LanguageDropDown />
                <AlertContainer>
                    <Notifications>
                        <NotificationCount bgColor={palette.secondary}>4</NotificationCount>
                        <NotificationIcon>
                            <VscBell />
                        </NotificationIcon>
                    </Notifications>
                    <MessagesDropdown />
                </AlertContainer>
                <AccountInfo />
            </RightContent>
        </HeaderContainer>
    );
};

export default Header;
