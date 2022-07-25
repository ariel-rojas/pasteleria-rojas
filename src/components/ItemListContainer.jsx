import albums from "./albums";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const { name } = useParams()
    const [Items, setItems] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const loadData = new Promise((resolve, reject) => {
            setTimeout(()=>resolve(albums),1000)
        })
        loadData.then((items) => {
            if(name){
                setItems(items.filter((album) => 
                album.genres.includes(name.charAt(0).toUpperCase() + name.slice(1)) == true))
                setLoading(true)
            }else{
                setItems(items)
                setLoading(true)
            }
        })
    },[name]) 
    return ( 
    <section className="w-[100%] h-screen bg-zinc-200 drop-shadow-lg">
        <ItemList items = {Items} loaded={loading}/>
    </section>
     );
}
 
export default ItemListContainer;