import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const { user, loading } = useAuthContext();
    console.log(user)

    if(loading){
        return <Loading/>;
    }
    if(!user){
        return <Navigate to="/login" />;
    }

        return children;
};

export default PrivetRoute;