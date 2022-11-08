import React from "react";
import { arregloproductos } from "../itemList/item";
import { ItemDetail } from "../itemDetail/itemDetail";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    
    const {detalleID} = useParams();
    const [data,SetData] = useState([]);

    const promesa = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(arregloproductos);
        },1000);
    })

    useEffect(()=>{
        const getProducto = async ()=>{
            const productos = await promesa;
            console.log("productos", productos);
            const producto = productos.find(elemento=>elemento.id === parseInt(detalleID));
            console.log("producto", producto)
            SetData(producto);
        }
        getProducto();
    },[detalleID])
    



    return (
        <ItemDetail detalles={data}/>
    );
}