import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext(null);

const Auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [lodding, setLodding] = useState(true);

    const createUser = (email, password) => {
        setLodding(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const signIn = (email, password) => {
        setLodding(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const logOut = () => {
        setLodding(true);
        return signOut(Auth)

    }



    useEffect(() => {
        const unsubcribe = onAuthStateChanged(Auth, loggedUser => {
            console.log("Logged in user inside auth state observer", loggedUser)
            setUser(loggedUser);
            setLodding(false);
        })
        return () => {
            unsubcribe();
        }
    }, [])



    const AuthInfo = {
        user,
        lodding,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;