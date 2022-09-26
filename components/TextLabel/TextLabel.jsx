import React from 'react';
import { useTheme } from 'styled-components';
import { Clone, LabelContainer, LabelText, Title } from './textLabelStyle';

const TextLabel = ({ label = 'title', value = 'value' }) => {
    const { palette } = useTheme();
    return (
        <LabelContainer borderColor={palette.borderPrimary}>
            <Title color={palette.textSecondary}>
                {label}
                <Clone>:</Clone>
            </Title>
            <LabelText color={palette.textPrimary}>{value}</LabelText>
        </LabelContainer>
    );
};

export default TextLabel;
