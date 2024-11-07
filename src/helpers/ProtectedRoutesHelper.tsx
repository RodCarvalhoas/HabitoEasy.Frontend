import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { authState } from '../state/authState';

export const ProtectedRoute = () => {
    const [auth] = useRecoilState(authState);

    if (!auth) {
        return <Navigate to="/auth" replace />;
    }
    
    return <Outlet/>;
};