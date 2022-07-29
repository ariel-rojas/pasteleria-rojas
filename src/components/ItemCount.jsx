import { useState } from "react";

const ItemCount = (props) => {
    const stock = props.stock
    const initial = props.initial
    const onAdd = props.onAdd
    const [count,setCount] = useState(initial)
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
        <div className="flex justify-center m-2">
            <button className="flex w-5 justify-center" onClick={() => registrarClick("-")}>-</button>
            <p className="flex w-5 justify-center">{count}</p>
            <button className="flex w-5 justify-center" onClick={() => registrarClick("+")}>+</button>       
        </div>
        <button onClick = {() => onAdd(count)}>Agregar al carrito</button>
        </>

     );
}
 
export default ItemCount;