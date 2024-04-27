import React, { useState } from 'react';
import NavBar from "./Navbar";
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
            <div className='home-page'>
                <h1 className='welcome'>Welcome!</h1>
                    <p className='text'>This is a project by Imani Allen and Dariel Alejos</p>
                    <p className='text'>Represent Me is a website that allows users to quickly check who their representatives are based on the state they live in.
                        This website also allows users to check on the status of bills in real time so they can always be up to date on bills that concern them.</p>
                    <p className='text'>This website also features a search bar that allows for easy searching of reepresentatives and bills!</p>
                <h2 className='header-text-important'>Important Information</h2>
                    <p className='text'>The government API is making over 200 calls, so the data may take time to load! Please give the webpage approximately 30 seconds to 1 minute to load!</p>
                <h2 className='header-text'>Documents</h2>
                <a className='text' href="https://indy6ix.github.io/">Docments and more information about our project can be found here</a>
            </div>
        </>
    )
}

export default HomePage; 