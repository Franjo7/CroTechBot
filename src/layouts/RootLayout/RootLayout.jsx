import { Link, Outlet } from 'react-router-dom';
import './RootLayout.css';

const RootLayout = () => {
    return (
        <div className="RootLayout">
            <header>
                <Link to="/" className="Logo">
                    <img src="/logo.png" alt="logo" />
                    <span>CROTECHBOT</span>
                </Link>
                <div className="User">User</div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;