import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { BackDrop } from '../components/SideBar/sideBarStyle';
import customTheme from '../theme/theme';
import useWindowSize from '../utils/useWindowSize';
import { Container, Content, Main, PageWrapper } from './layoutStyle';

const UserLayout = ({ children }) => {
    const defaultTheme = customTheme('light');
    const { screenWidth, screenHeight } = useWindowSize();

    const { palette } = defaultTheme;
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

    useEffect(() => {
        if (screenWidth < 1367) {
            setIsSideBarOpen(false);
        }
    }, [screenWidth]);

    const handleSmallDeviceSideBar = (e) => {
        const { className } = e.target;
        if (className.includes('BackDrop')) {
            setIsSideBarOpen(false);
        }
    };
    console.log(isSideBarOpen);
    return (
        <ThemeProvider theme={defaultTheme}>
            <PageWrapper bgColor={palette.background}>
                <Header setIsSideBarOpen={setIsSideBarOpen} />
                <Container>
                    {screenWidth > 1367 ? (
                        <SideBar open={isSideBarOpen} />
                    ) : (
                        isSideBarOpen && (
                            <BackDrop onClick={handleSmallDeviceSideBar}>
                                <SideBar open={isSideBarOpen} tabView={screenWidth < 1367} />
                            </BackDrop>
                        )
                    )}
                    <Main open={isSideBarOpen && screenWidth > 1367}>
                        <Content>{children}</Content>
                        <Footer />
                    </Main>
                </Container>
            </PageWrapper>
        </ThemeProvider>
    );
};

export default UserLayout;
