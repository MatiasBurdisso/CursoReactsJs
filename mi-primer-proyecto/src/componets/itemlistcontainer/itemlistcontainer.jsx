import { arregloproductos } from "../itemList/item";
import { Itemlist } from "../itemList/itemList";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";


export const ItemListContainer = () => {
    console.log(useParams());
    const {categoryId} = useParams();
    const [productos,Setproductos] = useState([]);

    const promesa = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(arregloproductos);
        },2000);
    })

    useEffect(()=>{
        promesa.then((response)=>{
            if(categoryId){
                const productosFiltered = response.filter(elm=>elm.categoria === categoryId);
                Setproductos(productosFiltered);
            }else{
                Setproductos(response)
            }
        })

    },[categoryId])


    /*const obtenerproductos = () =>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(productos)
            },5000);
        })
    }
    useEffect(() =>{
        obtenerproductos().them((result)=>console.log(result))
    })*/
    console.log("productos",productos);
    return(
        <div className="cuerpo">
          <Itemlist items={productos}/>
        </div>

    )
}