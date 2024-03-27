import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import Register from "./Register";
import axios from 'axios';
import { setUserSession } from '../service/AuthService';

const loginAPIUrl = 'https://9oda7jj3w3.execute-api.us-east-2.amazonaws.com/prod/login';

const Login = () => {
        const navigate = useNavigate();
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [errorMessage, setErrorMessage] = useState(null);
      
        const submitHandler = (event) => {
          event.preventDefault();
          if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Both username and password are required');
            return;
          }
          setErrorMessage(null);
          const requestConfig = {
            headers: {
              'x-api-key': 'yLxwltkVoY38QTYURenIV8zoWDXA0KOROFQXY5Ob'
            }
          }
          const requestBody = {
            username: username,
            password: password
          }
      
          axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
            console.log(response);
            setUserSession(response.data.user, response.data.token);
            navigate('/home-page');
          }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
              setErrorMessage(error.response.data.message);
            } else {
              setErrorMessage('Server is down! Please try again later!');
            }
          })
        }

    return(
        <div class="container">
        <form onSubmit={submitHandler} class="form" id="login">
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>

        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>

        <div class="form__input-group">
          <input
            type="password"
            class="form__input"
            autofocus
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>

        <button class="form__button" type="submit">Continue</button>

        <p class="form__text">
        {errorMessage && <p className='form__input-error-message'>{errorMessage}</p>}

          <a href="#" class="form__link">Forgot your password?</a>
        </p>

        <p class="form__text">
          <a class="form__link" href="/register" element={<Register/>} id="linkCreateAccount"
            >Don't have an account? Create Account</a
          >
        </p>
      </form>
      </div>
    )
}

export default Login; 