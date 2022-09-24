const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

const breakPoints = () => {
    return {
        mobileS: `(max-width: ${sizes.mobileS})`,
        mobileM: `(max-width: ${sizes.mobileM})`,
        mobileL: `(max-width: ${sizes.mobileL})`,
        tablet: `(max-width: ${sizes.tablet})`,
        laptop: `(max-width: ${sizes.laptop})`,
        laptopL: `(min-width: ${sizes.laptopL})`,
        desktop: `(min-width: ${sizes.desktop})`
    };
};

export default breakPoints;

// screen and
