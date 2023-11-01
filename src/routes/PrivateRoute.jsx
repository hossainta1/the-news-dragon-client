import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const location = useLocation();
    

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;



/**
 * --------------------
 *        steps
 * --------------------
 * 1. Check user login or not
 * 2. if users is looged in ,then allow them visit the route
 * 3. Else redirect the users in login page
 * 4. Set up the private router
 * 
 * 
 * 
 * 
 * */ 