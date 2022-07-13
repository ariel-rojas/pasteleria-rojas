import ItemList from "./ItemList";
import Item from "./Item"
import { useEffect, setState } from "react";


const ItemListContainer = () => {
    const [Items, setItems] = setState([])
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve(ItemList),2000);
        setTimeout(()=> reject("Error: no se han cargado los productos",2000))
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