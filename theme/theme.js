import breakPoints from './breakPoints';
import colors from './colors';

const customTheme = (mode = 'light') => {
    const theme = {
        light: {
            breakpoints: { ...breakPoints() },
            palette: { ...colors() },
            font: 'Inter'
        }
    };
    return theme[mode];
};

export default customTheme;
