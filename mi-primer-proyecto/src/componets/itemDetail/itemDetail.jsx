import { arregloproductos } from "../itemList/item";
import { ItemCount } from '../itemcount/itemcount';
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


export const ItemDetail = ({ detalles }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  }

  return (
    <div class="col-lg-4">
      <div class="text-center card-box">
        <div class="member-card pt-2 pb-2">
          <div class="thumb-lg member-thumb mx-auto">
            <img src={detalles.foto} class="rounded-circle img-thumbnail" alt="foto" />
          </div>
          <div>
            <h1>{detalles.articulos}</h1>
            {
              goToCart
              ? <Link to ='/quienesSomos' >Terminar Compra</Link>
              : <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
          </div>
        </div>
      </div>
    </div>
  )

}