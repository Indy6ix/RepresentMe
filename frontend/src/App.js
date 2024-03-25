import {BrowserRouter, NavLink} from "react-router-dom";
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
        </Routes>
      </div>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
