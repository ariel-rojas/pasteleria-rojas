import React, {useState,useEffect} from 'react';
import albums from "./albums";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [Item, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadData = new Promise((resolve, reject) => {
            setTimeout(()=>resolve(albums.filter((album) => album.id == id).shift()),2000)
        })
        loadData.then((items) => {
            setItems(items)
            setLoading(true)
        })
    },[id]) 
    return (
    <section className="w-full h-screen bg-zinc-200 drop-shadow-lg pt-[100px] ">
        <ItemDetail item = {Item} loaded={loading}/>
    </section>
     );
}
 
export default ItemDetailContainer;