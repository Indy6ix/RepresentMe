import React from 'react';
import Login from "./Login";

const Register = () => {
    return(
        <div class="container">
        <form class="form" id="createAccount">
        <h1 class="form__title">Create Account</h1>
        <div class="form__message form__message--error"></div>

        <div class="form__input-group">
          <input
            type="text"
            id="signupUsername"
            class="form__input"
            autofocus
            placeholder="Username"
          />
          <div class="form__input-error-message"></div>
        </div>

        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Email Address"
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

        <div class="form__input-group">
          <input
            type="password"
            class="form__input"
            autofocus
            placeholder="Confirm Password"
          />
          <div class="form__input-error-message"></div>
        </div>

        <button class="form__button" type="submit">Continue</button>

        <p class="form__text">
          <a class="form__link" href="/login" element={<Login/>} id="linkLogin"
            >Already have an account? Sign in</a
          >
        </p>
      </form>
      </div>
    )
}

export default Register; 