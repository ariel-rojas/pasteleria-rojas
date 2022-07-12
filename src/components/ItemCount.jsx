import { useState } from "react";

const ItemCount = (props) => {
    const stock = props.stock
    const initial = props.initial
    const onAdd = props.onAdd
    const [count,setCount] = useState(0)
    const registrarClick= (operacion)=>{
        if(operacion ==="-" && count>0){
            setCount(count-1)
        }
        else if(operacion ==="+" && count<stock){
            setCount(count+1)
        }
    }
    return ( 
        <>
        <button onClick={() => registrarClick("-")}>-</button>
        {count}
        <button onClick={() => registrarClick("+")}>+</button>
        <button onClick = {() => onAdd()}>Añadir al carrito</button>
        </>

     );
}
 
export default ItemCount;