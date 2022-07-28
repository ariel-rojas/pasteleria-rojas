import albums from "./albums";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom';

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
    <section className="w-[100%] h-screen pt-[150px] bg-zinc-200 drop-shadow-lg">
        <div className="flex justify-center">
        <p className="flex text-2xl text-slate-800 p-2">Filtrar por género:</p>
        <Link className='flex text-2xl text-slate-800 p-2 font-bold' to={"/category/rock"}>Rock</Link>
        <Link className='flex text-2xl text-slate-800 p-2 font-bold' to={"/category/pop"}>Pop</Link>
        <Link className='flex text-2xl text-slate-800 p-2 font-bold' to={"/category/electronic"}>Electrónica</Link>
        <Link className='flex text-2xl text-slate-800 p-2 font-bold' to={"/category/jazz"}>Jazz</Link>
        </div>
        <ItemList items = {Items} loaded={loading}/>
    </section>
     );
}
 
export default ItemListContainer;