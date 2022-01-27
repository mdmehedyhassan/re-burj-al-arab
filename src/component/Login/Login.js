import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

initializeApp(firebaseConfig);
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignInHandler = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((res) => {
                const { displayName, email } = res.user;
                const signedInNewUser = { name: displayName, email: email };
                setLoggedInUser(signedInNewUser);
                history.replace(from);
            }).catch((err) => {
                const errorMessage = {error: "Something is wrong please try again."};
                setLoggedInUser(errorMessage)
            });
    };

    const googleSignOutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setLoggedInUser({});
        }).catch((err) => {
            const errorMessage = {error: "Something is wrong please try again."};
            setLoggedInUser(errorMessage)
        });
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>This is a login</h1>
            {
                loggedInUser.email ? <Button onClick={googleSignOutHandler} variant="outlined" color="error"><GoogleIcon />oogle Sign Out</Button> :
                    <Button onClick={googleSignInHandler} variant="contained"><GoogleIcon />oogle Sign in</Button>
            }
            {loggedInUser.error}
        </div>
    );
};

export default Login;