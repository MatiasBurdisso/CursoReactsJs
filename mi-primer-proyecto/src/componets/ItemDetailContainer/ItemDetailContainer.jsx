import { arregloproductos } from "../itemList/item";
import { Itemlist } from "../itemList/itemList";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";

export const ItemDetailContainer = () => {
    
    const {Id} = useParams();
    console.log(Id);

    const [productos,Setproductos] = useState([]);

    const detalle = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(arregloproductos);
        },2000);
    })

    useEffect(()=>{
        detalle.then((response)=>{
            if(Id){
                const productosFiltered = response.filter(elm=>elm.id === Id);
                Setproductos(productosFiltered);
            }else{
                Setproductos(response)
            }
        })

    },[Id])


    
    console.log("productos",productos);
    return(
        <div className="cuerpo">
          <Itemlist items={productos}/>
        </div>

    )
}