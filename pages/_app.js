import UserLayout from '../layouts/UserLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <UserLayout>
            <Component {...pageProps} />
        </UserLayout>
    );
}

export default MyApp;
