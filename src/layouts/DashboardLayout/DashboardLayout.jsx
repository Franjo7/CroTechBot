import { Outlet, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';

const DashboardLayout = () => {

    const { userId, isLoaded} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in');
        }
    }, [isLoaded, userId, navigate]); 

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="DashboardLayout">
            <div className="menu">MENU</div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;