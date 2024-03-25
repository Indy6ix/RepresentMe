import React from 'react';
import Register from "./Register";

const Login = () => {
    return(
        <div class="container">
        <form class="form" id="login">
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>

        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Username or Email"
          />
          <div class="form__input-error-message"></div>
        </div>

        <div class="form__input-group">
          <input
            type="password"
            class="form__input"
            autofocus
            placeholder="Password"
          />
          <div class="form__input-error-message"></div>
        </div>

        <button class="form__button" type="submit">Continue</button>

        <p class="form__text">
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