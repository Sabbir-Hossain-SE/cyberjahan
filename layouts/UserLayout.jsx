import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SideBar from '../components/SideBar/SideBar';
import customTheme from '../theme/theme';
import { Container, Content, Main, PageWrapper } from './layoutStyle';

const UserLayout = ({ children }) => {
    const defaultTheme = customTheme('light');
    const { palette } = defaultTheme;
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    return (
        <ThemeProvider theme={defaultTheme}>
            <PageWrapper bgColor={palette.background}>
                {/* <Header setIsSideBarOpen={setIsSideBarOpen} /> */}
                <Container>
                    {/* <SideBar open={isSideBarOpen} /> */}
                    <SideBar open={false} />
                    <Main open={false}>
                        <Content>{children}</Content>
                        {/* <Footer /> */}
                    </Main>
                </Container>
            </PageWrapper>
        </ThemeProvider>
    );
};

export default UserLayout;
