import ItemList from "./ItemList";
import Item from "./Item"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const { name } = useParams()
    const [Items, setItems] = useState([])
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve(ItemList),2000)
    })
    useEffect(() => {
        promise.then((res) => {
            const products = res
            if(name){
                setItems(products.filter((product) => product.category == name))
                console.log(Items)
            }else{
                setItems(products)
            }
        })
    },[name])
    return ( 
    <section className="w-full h-screen bg-zinc-200 drop-shadow-lg pt-[100px] ">
        <div className = "w-full h-screen flex flex-row flex-wrap justify-around items-center">
            {Items.map((item) => {
                return <Item name={item.name} imgUrl={item.imgUrl} price={item.price} description={item.description} />
            })}
        </div>   
    </section>
     );
}
 
export default ItemListContainer;