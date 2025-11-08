import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase--init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if(currentUser?.email){
                const userData = { email: currentUser?.email };
                axios.post("https://quantumedge-server.vercel.app/auth/jwt", userData, {
                    withCredentials: true
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => console.log(err.data))
            }
        });

        return () => {
            unsubscribe();
        };
    }, [])

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        registerUser,
        loginUser,
        logoutUser,
        updateUser
    };
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;