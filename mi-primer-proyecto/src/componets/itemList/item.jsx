

export const item = (props) =>{
    return(
        <div>
            <img src={props.foto} alt="" />
            <h1>{props.producto}</h1>
            <h2>{props.genero}</h2>
            <h2>{props.precio}</h2>
        </div>
    )
}