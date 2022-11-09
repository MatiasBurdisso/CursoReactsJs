import React from "react";
import { addDoc, collection, getFirestore} from 'firebase/firestore';
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ItemCart } from "../itemCart/itemCart";


export const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const compra = {
        comprador : {
            nombre: 'Matias',
            apellido: 'Burdisso',
            email: 'matiasburdisso17@gmail.com',
            direccion: 'patricias Argentina'

        },
        items: cart.map(product =>({Articulo: product.articulos, Categoria: product.categoria, Precio: product.precio, Cantidad: product.quantity })),
        total: totalPrice(),

    }

    const clickCompra = () => {
        const db = getFirestore();
        const comprasCollection = collection(db,'compras');
        addDoc(comprasCollection,compra)
        .then(({id}) =>console.log(id))


    }

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

        <button onClick={clickCompra}>Ir a Pagar</button>
        
        </>
    )
}