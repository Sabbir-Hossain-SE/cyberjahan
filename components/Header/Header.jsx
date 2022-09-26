import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { VscBell } from 'react-icons/vsc';
import { useTheme } from 'styled-components';
import brandLogo1 from '../../public/brand.png';
import brandLogo from '../../public/logo.jpg';
import { Icon } from '../../styles/commonStyle';
import useWindowSize from '../../utils/useWindowSize';
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
    const { screenWidth } = useWindowSize();
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    useEffect(() => {
        if (screenWidth < 1100) {
            setIsSmallDevice(true);
        } else {
            setIsSmallDevice(false);
        }
    }, [screenWidth]);

    const handleSideBar = () => {
        setIsSideBarOpen((prev) => !prev);
    };

    return (
        <HeaderContainer color={palette}>
            <LeftContent isSmallDevice={isSmallDevice}>
                <LogoContainer isSmallDevice={isSmallDevice}>
                    {!isSmallDevice ? (
                        <Image src={brandLogo} alt="logo" width={200} height={42} />
                    ) : (
                        <Image src={brandLogo1} alt="logo" width={45} height={45} />
                    )}
                </LogoContainer>

                <Icon>
                    <MenuIcon onClick={handleSideBar} fontSize={24} />
                </Icon>
            </LeftContent>
            <RightContent>
                {!isSmallDevice ? (
                    <>
                        <SearchBarWrapper>
                            <SearchBar />
                        </SearchBarWrapper>
                        <LanguageDropDown />
                    </>
                ) : null}
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
