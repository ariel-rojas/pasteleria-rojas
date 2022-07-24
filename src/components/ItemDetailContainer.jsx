import React, {useState,useEffect} from 'react';
import albums from "./albums";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams()
    console.log("el id es"+id)
    const [Item, setItems] = useState([])

    useEffect(() => {
        const loadData = new Promise((resolve, reject) => {
            setTimeout(()=>resolve(albums.filter((album) => album.id == id).shift()),2000)
        })
        loadData.then((items) => {
            setItems(items)
        })
    },[id]) 
    return (
    <section className="w-full h-screen bg-zinc-200 drop-shadow-lg pt-[100px] ">
        <ItemDetail item = {Item}/>
    </section>
     );
}
 
export default ItemDetailContainer;