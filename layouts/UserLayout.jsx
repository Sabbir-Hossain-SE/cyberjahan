import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import customTheme from '../theme/theme';
import { Container, Content, Main, PageWrapper } from './layoutStyle';

const UserLayout = ({ children }) => {
    const defaultTheme = customTheme('light');
    const { palette } = defaultTheme;
    console.log(palette);
    return (
        <ThemeProvider theme={defaultTheme}>
            <PageWrapper bgColor={palette.background}>
                <Header />
                <Container>
                    <SideBar />
                    <Main>
                        <Content>{children}</Content>
                        <Footer />
                    </Main>
                </Container>
            </PageWrapper>
        </ThemeProvider>
    );
};

export default UserLayout;
