import "./Navbar.css";
import {CartWidget} from "../cartwidget/CartWidget";
import ImagenDeLogo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () =>{
    return(
        <nav className="barranavegacion">
            <img className="imagenlogo" src={ImagenDeLogo} alt="Logo" />
            <ul className="lista">
                <li><Link to="./inicio">Inicio</Link></li>
                <li><Link to="./categoria/masculino">Hombres</Link></li>
                <li><Link to="./categoria/femenino">Mujeres</Link></li>
                <li><Link to="./quienesSomos">Nosotros</Link></li>
                
            </ul>
            <Link to="./cart"><CartWidget/></Link>
        </nav>
    )
}