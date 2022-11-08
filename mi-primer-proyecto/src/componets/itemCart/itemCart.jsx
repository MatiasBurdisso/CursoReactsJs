import React from "react";
import { arregloproductos } from "../itemList/item";
import { useCartContext } from "../../context/CartContext";
import "./itemCart.css";


export const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.foto} alt={product.articulos} />
            <div>
                <p>Articulo: {product.articulos}</p>
                <p>Genero: {product.categoria}</p>
                <p>Precio: {product.precio}</p>
                <p>Subtotal:{product.quantity * product.precio}</p>
                <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
            </div>

        </div>
    )
}