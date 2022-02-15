import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, setIsLoading} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_url = location.state?.from || '/';

    const logInUsingGoogle = () => {
        signInUsingGoogle()
        .then((result) => {
            navigate(redirect_url);
        }).catch((error) => {
            
        }).finally(()=> setIsLoading(false));
    }
    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={logInUsingGoogle} variant="success">Google Sign In</Button>
        </div>
    );
};

export default Login;