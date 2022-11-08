import {} from "./cartwidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () =>{
    const {totalProducts} = useCartContext();
    return(
        <div>
            <FontAwesomeIcon className="carrito" icon={faCartShopping}/>
            <p className="carrito">{totalProducts() || ''}</p>
        </div>
    )
}