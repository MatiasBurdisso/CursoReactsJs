import "./Navbar.css";
import {CartWidget} from "../cartwidget/CartWidget";
import ImagenDeLogo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <nav className="barranavegacion">
            <img className="imagenlogo" src={ImagenDeLogo} alt="Logo" />
            <ul className="lista">
                <li><Link to="./inicio">Inicio</Link></li>
                <li><a href=""></a>Mujeres</li>
                <li><a href=""></a>Hombres</li>
                <li><Link to="./quienesSomos">Nosotros</Link></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}