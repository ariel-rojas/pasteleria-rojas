import ItemList from "./ItemList";
import Item from "./Item"
import { useEffect, useState } from "react";


const ItemListContainer = () => {
    const [Items, setItems] = useState([])
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve(ItemList),8000);
        console.log(Items)
        setTimeout(()=> reject("Error: no se han cargado los productos",8000))
    })
    useEffect(()=>{
        promise.then((res) => setItems(ItemList))
    }, [])
    console.log(Items)
    return ( 
    <section className="w-full h-screen bg-zinc-200 drop-shadow-lg pt-[100px] ">
        <div className = "w-full h-screen flex flex-row flex-wrap justify-around items-center">
            {Items.map((item) => {
                return <Item name={item.name} imgUrl={item.imgUrl} price={item.price} description={item.description}/>
            })}
        </div>   
    </section>
     );
}
 
export default ItemListContainer;