import { useRouter } from 'next/router';
import React from 'react';
import Loader from '../components/Loader/Loader';
import UnderConstruction from '../styles/homeStyle';

const Home = () => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <UnderConstruction>
            <span>The dashboard is under Construction!</span>
        </UnderConstruction>
    );
};

export default Home;
