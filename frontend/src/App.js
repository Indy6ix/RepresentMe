import {BrowserRouter} from "react-router-dom";
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import React, { useEffect, useState } from "react";
import { getToken, getUser, setUserSession, resetUserSession } from "./service/AuthService";
import axios from 'axios';

const verifyTokenURL = 'https://9oda7jj3w3.execute-api.us-east-2.amazonaws.com/prod/verify';


function App() {

  const[isAuthenicating, setAuthenication] = useState(true);

  useEffect(() =>{
      const token = getToken();
      if(token === 'underifned' || token === undefined || token === null || !token){
        return;
      }

      const requestConfig = {
        headers: {
          'x-api-key': 'yLxwltkVoY38QTYURenIV8zoWDXA0KOROFQXY5Ob'
        }
      }

      const requestBody = {
        user: getUser(),
        token: getToken()
      }

      axios.post(verifyTokenURL, requestBody, requestConfig).then(response => {
        setUserSession(response.data.user, response.data.token);
        setAuthenication(false);
    }).catch(() => {
      resetUserSession();
      setAuthenication(false);
    })
  }, []);

  const token = getToken();
  if(isAuthenicating && token){
    return <div className="content">Authenicating...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/home-page" element={<HomePage/>}/> 
        </Routes>
      </div>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
