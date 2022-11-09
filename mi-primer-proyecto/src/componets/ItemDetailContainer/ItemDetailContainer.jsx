import React from "react";
import { arregloproductos } from "../itemList/item";
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import { ItemDetail } from "../itemDetail/itemDetail";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    
    const {detalleID} = useParams();
    const [data,SetData] = useState([]);

    
    useEffect(()=>{ 
        const querydb = getFirestore();
        const queryDoc = doc (querydb, 'items', detalleID);
        getDoc(queryDoc)
            .then(res => SetData({id: res.id, ...res.data()}))
        
    },[detalleID])
    



    return (
        <ItemDetail detalles={data}/>
    );
}