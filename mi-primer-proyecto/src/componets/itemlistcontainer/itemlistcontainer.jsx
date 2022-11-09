import { arregloproductos } from "../itemList/item";
import { Itemlist } from "../itemList/itemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



export const ItemListContainer = () => {
    console.log(useParams());
    const { categoryID } = useParams();
    console.log(categoryID);

    const [data, SetData] = useState([]);



    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');

        if (categoryID) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoryID))
            getDocs(queryFilter)
                .then(res => SetData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        } else {
            getDocs(queryCollection)
                .then(res => SetData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }


    }, [categoryID])


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

    return (
        <div className="cuerpo">
            <Itemlist items={data} />
        </div>

    )
}