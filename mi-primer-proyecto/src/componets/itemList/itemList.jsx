import { arregloproductos } from "./item";
import { Link, link } from "react-router-dom";

export const Itemlist = ({items}) => {
  
  return (
    <div>
      {items.map(producto => {
        return (
          <div class="col-lg-4">
            <div class="text-center card-box">
              <div class="member-card pt-2 pb-2">
                <div class="thumb-lg member-thumb mx-auto">
                  <img src={producto.foto} class="rounded-circle img-thumbnail" alt="foto" />
                </div>
                <div>
                <h1>{producto.articulos}</h1>
                </div>
                <div>
                <h2>{producto.categoria}</h2>
                <h3 class="text-muted">{producto.precio}</h3>
                <Link to={`/item/${producto.id}`}>
                  <button>ver mas</button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}