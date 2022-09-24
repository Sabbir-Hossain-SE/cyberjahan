import React from 'react';
import { useTheme } from 'styled-components';
import { HomeContainer } from '../styles/homeStyle';

const Home = () => {
    const { palette } = useTheme();
    return <HomeContainer>Home</HomeContainer>;
};

export default Home;
