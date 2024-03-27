import React, { useState } from 'react';
import NavBar from "./Navbar";
import "./NavStyle.css"
import Profile from '../WebPages/Profile';
import Bills from '../WebPages/Bills';
import Representatives from '../WebPages/Representatives';

function HomePage () {
    console.log(window.location);
    let component; 

switch(window.location.pathname){
    case "/home-page":
        component = HomePage
        break
    case "/representatives":
        component = <Representatives />
        break
    case "/bills":
        component = <Bills />
        break
    case "/profile":
        component = <Profile />
        break;
}

    return (
        <>
            <NavBar />
           <div>
            This is a home page?
           </div>
        </>
    )
}

export default HomePage; 