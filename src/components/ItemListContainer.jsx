import discos from "./discos";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const { name } = useParams()
    const [Items, setItems] = useState([])

    useEffect(() => {
        const loadData = new Promise((resolve, reject) => {
            setTimeout(()=>resolve(discos),2000)
        })
        loadData.then((items) => {
            if(name){
                setItems(items.filter((album) => album.category == name))
            }else{
                setItems(items)
            }
        })
    },[name]) 
    return ( 
    <section className="w-full h-screen bg-zinc-200 drop-shadow-lg pt-[100px] ">
        <ItemList items = {Items}/>
    </section>
     );
}
 
export default ItemListContainer;