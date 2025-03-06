import { Link, Outlet } from 'react-router-dom';
import './RootLayout.css';

const RootLayout = () => {
    return (
        <div className="RootLayout">
            <header>
                <Link to="/">
                    <img src="/logo.png" alt="logo" />
                    <span>CROTECHBOT</span>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;