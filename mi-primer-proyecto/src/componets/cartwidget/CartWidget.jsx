import {} from "./cartwidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping} from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () =>{
    return(
        <div>
            <FontAwesomeIcon className="carrito" icon={faCartShopping}/>
            <p className="carrito">10</p>
        </div>
    )
}