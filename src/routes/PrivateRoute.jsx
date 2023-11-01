import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;



/**
 * --------------------
 *        steps
 * --------------------
 * 1. Check user login or not
 * 2. if users is looged in ,then allow them visit the route
 * 3. Else redirect the users in login page
 * 4.
 * 
 * 
 * 
 * 
 * */ 