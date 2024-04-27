import Bills from "../WebPages/Bills";
import Profile from "../WebPages/Profile";
import Representatives from "../WebPages/Representatives";
import "./NavStyle.css";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (

        <nav className='nav'>
        <a class="site_title" href='/home-page'>Represent Me</a>

        <ul>
            <li>
                <NavLink to="/representatives" element={<Representatives/>} className="navlink">Representatives</NavLink>
            </li>
            <li>
                <NavLink to="/bills" element={<Bills/>} className="navlink">Bills</NavLink>
            </li>

            <li>
                <NavLink to="/profile" element={<Profile/>} className="navlink">Logout</NavLink>
            </li>
        </ul>
        </nav>
    )
        
}
