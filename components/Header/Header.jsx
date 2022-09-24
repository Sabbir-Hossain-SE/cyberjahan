import Image from 'next/image';
import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { useTheme } from 'styled-components';
import brandLogo from '../../public/logo.jpg';
import AccountInfo from '../AccountInfo/AccountInfo';
import LanguageDropDown from '../LanguageSelection/LanguageDropDown';
import SearchBar from '../SearchBar/SearchBar.';
import {
    AlertContainer,
    HeaderContainer,
    LeftContent,
    LogoContainer,
    MenuIcon,
    MessageCount,
    MessageIcon,
    Messages,
    NotificationCount,
    NotificationIcon,
    Notifications,
    RightContent,
    SearchBarWrapper
} from './headerStyle';

const Header = () => {
    const { palette } = useTheme();
    return (
        <HeaderContainer color={palette}>
            <LeftContent>
                <LogoContainer>
                    <Image src={brandLogo} alt="logo" width={200} height={42} />
                </LogoContainer>
                <MenuIcon fontSize={28} />
            </LeftContent>
            <RightContent>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>
                <LanguageDropDown />
                <AlertContainer>
                    <Notifications>
                        <NotificationCount>4</NotificationCount>
                        <NotificationIcon>
                            <VscBell />
                        </NotificationIcon>
                    </Notifications>
                    <Messages>
                        <MessageCount>6</MessageCount>
                        <MessageIcon>
                            <BiMessageDetail />
                        </MessageIcon>
                    </Messages>
                </AlertContainer>
                <AccountInfo />
            </RightContent>
        </HeaderContainer>
    );
};

export default Header;
