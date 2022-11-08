import { arregloproductos } from "../itemList/item";
import { Itemlist } from "../itemList/itemList";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";



export const ItemListContainer = () => {
    console.log(useParams());
    const {categoryID} = useParams();
    console.log(categoryID);

    const [productos,Setproductos] = useState([]);

    const promesa = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(arregloproductos);
        },1000);
    })

    useEffect(()=>{
        promesa.then((response)=>{
            if(categoryID){
                const productosFiltered = response.filter(elm=>elm.categoria === categoryID);
                Setproductos(productosFiltered);
            }else{
                Setproductos(response)
            }
        })

    },[categoryID])


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

    return(
        <div className="cuerpo">
          <Itemlist items={productos}/>
        </div>

    )
}