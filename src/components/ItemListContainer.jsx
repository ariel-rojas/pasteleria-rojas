import products from "./products";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const { name } = useParams()
    const [Items, setItems] = useState([])

    useEffect(() => {
        const loadData = new Promise((resolve, reject) => {
            setTimeout(()=>resolve(products),2000)
        })
        loadData.then((items) => {
            setItems(items);
            // const products = res
            // if(name){
            //     setItems(products.filter((product) => product.category == name))
            //     console.log(Items)
            // }else{
            //     setItems(products)
            // }
        })
    },[])  //[name]
    return ( 
    <section className="w-full h-screen bg-zinc-200 drop-shadow-lg pt-[100px] ">
        <ItemList items = {Items}/>
    </section>
     );
}
 
export default ItemListContainer;