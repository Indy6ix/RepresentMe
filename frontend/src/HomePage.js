import React from 'react';
import { getUser, resetUserSession } from './service/AuthService';
import { useNavigate } from 'react-router';

const HomePage = () => {
    const navigate = useNavigate();
    const user = getUser();
    const name = user != 'underfined' && user ? user.name : '';

    const logoutHandler = () => {
        resetUserSession();
        navigate('/login');
    }

    return(

        <div className="HomePage">
            Hello {name}! You have been logged in! Welcome to Represent Me! <br />
            <input type="button" value="Logout" onClick={logoutHandler}/>
        </div>
    )
}

export default HomePage; 