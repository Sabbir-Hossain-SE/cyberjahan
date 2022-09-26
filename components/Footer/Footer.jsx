import React from 'react';
import { useTheme } from 'styled-components';
import { FooterContainer, FooterText } from './footerStyle';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <FooterContainer borderColor={palette.divider}>
            <FooterText color={palette.primaryLight}>
                © Copyright <strong>Cyber Jahan Limited.</strong> All Rights Reserved Designed and
                Developed by Cyber Jahan Limited
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
