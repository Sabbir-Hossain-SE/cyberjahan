import React from 'react';
import { useTheme } from 'styled-components';
import CustomButton from './buttonStyled';

const Button = ({ title = 'button', handleClick = null, color = 'primary' }) => {
    const { palette } = useTheme();
    return (
        <CustomButton color={palette[color]} type="button" onClick={handleClick}>
            {title}
        </CustomButton>
    );
};

export default Button;
