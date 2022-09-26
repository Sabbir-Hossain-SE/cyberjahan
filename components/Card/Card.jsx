import React from 'react';
import { useTheme } from 'styled-components';
import { CardBadge, CardContainer } from './cardStyle';

const Card = ({ children = 'card-content', badgeText = null }) => {
    const { palette } = useTheme();
    return (
        <CardContainer borderColor={palette.borderPrimary} bgColor={palette.paper}>
            {badgeText && (
                <CardBadge bgColor={palette.secondary} color={palette.commonWite}>
                    {badgeText}
                </CardBadge>
            )}
            {children}
        </CardContainer>
    );
};

export default Card;
