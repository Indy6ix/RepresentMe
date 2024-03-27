import React from 'react';
import Login from "./Login";

const Home = () => {

    return(

        <div>

         <p class="home__text">
          <a class="home_text_link" href="/login" element={<Login/>} id="linkCreateAccount"
            >Please Sign In</a
          >
        </p>
        </div>
    )
}

export default Home; 