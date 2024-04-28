import React, {useState} from 'react';
import Login from "./Login";
import axios from 'axios';


const registerUrl = 'https://9oda7jj3w3.execute-api.us-east-2.amazonaws.com/prod/register';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        if(username.trim() === '' || name.trim() === '' || email.trim() === '' || password.trim() === '' ){
            setMessage('All fields are required!')
            return;
        }
        setMessage(null);
        
        const requestConfig = {
            headers: {
                'x-api-key': 'yLxwltkVoY38QTYURenIV8zoWDXA0KOROFQXY5Ob'
            }
        }
        const requestBody = {
            name: name,
            username: username,
            email: email,
            password: password
        }

        axios.post(registerUrl, requestBody, requestConfig).then(response => {
            setMessage('Registration Successful!');
        }).catch(error =>{
            if(error.response.status === 401 || error.response.status === 403){
                setMessage(error.response.data.message);
            }else{
                setMessage('Server is down! Please try again later!');
            }
        })
    }


    return(
        <div class="register">
        <form onSubmit={submitHandler} class="form" id="createAccount">
        <h1 class="form__title">Create Account</h1>
        <div class="form__message form__message--error"></div>

        <div class="form__input-group">
         <input
            type="text"
            id="signupName"
            class="form__input"
            autofocus
            placeholder="Name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>

        <div class="form__input-group">
          <input
            type="text"
            id="signupUsername"
            class="form__input"
            autofocus
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>

        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Email Address"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
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
        </div>

        <button class="form__button" type="submit">Continue</button>

        <p class="form__text">

        {message && <p className='form__input-error-message'>{message}</p>}

          <a class="form__link" href="/login" element={<Login/>} id="linkLogin"
            >Already have an account? Sign in</a
          >
        </p>
      </form>
      </div>
    )
}

export default Register; 