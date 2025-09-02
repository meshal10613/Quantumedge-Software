import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const { user, loading } = useAuthContext();

    if(loading){
        return <Loading/>;
    }
    return user ? children : <Navigate to="/login" replace />;
};

export default PrivetRoute;