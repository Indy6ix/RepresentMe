import React, {useState} from 'react';
import { getUser, resetUserSession } from '../service/AuthService';
import { useNavigate } from 'react-router';
import {NavLink, Route, Switch} from "react-router-dom";
import NavBar from '../Navigation/Navbar';
import "./ProfileStyle.css"

function Profile(){
    const navigate = useNavigate();
    const user = getUser();
    const name = user != 'underfined' && user ? user.name : '';

    const logoutHandler = () => {
        resetUserSession();
        navigate('/login');
    }
    
    return(  
        <>
        <NavBar />
       
            <div className='card'>
                <h1 className='user-name-title'>Leaving so soon?</h1>
                <input className="logoutButton" type="button" value="Logout" onClick={logoutHandler}/>
            </div>

  
        </>   

   
    )
}

export default Profile;