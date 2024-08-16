/* eslint-disable react/prop-types */

import { getAuth } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { app } from "../firebase/Firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext('');

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        // Clean up subscription on unmount
        return () => unsubscribe();
    }, []);

    const authInfo = { user, loading, auth };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
