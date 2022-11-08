import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ItemCart } from "../itemCart/itemCart";


export const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay agregado ningun Articulo</p>
                <Link to='/inicio'>Hacer Compra</Link>
            </>
        )
    }


    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>Total: {totalPrice()}</p>
        

        </>
    )
}