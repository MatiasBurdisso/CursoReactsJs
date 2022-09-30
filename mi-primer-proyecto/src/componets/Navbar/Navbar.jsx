import "./Navbar.css";
import {CartWidget} from "../cartwidget/CartWidget";
import ImagenDeLogo from "../../assets/logo.jpg";

export const Navbar = () =>{
    return(
        <nav className="barranavegacion">
            <img className="imagenlogo" src={ImagenDeLogo} alt="Logo" />
            <ul className="lista">
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Mujeres</li>
                <li><a href=""></a>Hombres</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}