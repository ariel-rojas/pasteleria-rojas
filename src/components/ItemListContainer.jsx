import ItemList from "./ItemList";
import Item from "./Item"

const ItemListContainer = () => {
    return ( 
    <section className="w-full h-screen bg-zinc-200 drop-shadow-lg pt-[100px] ">
        <div className = "w-full h-screen flex flex-row justify-around items-center">
            {ItemList.map((item) => {
                return <Item name={item.name} imgUrl={item.imgUrl} price={item.price} description={item.description}/>
            })}
        </div>   
    </section>
     );
}
 
export default ItemListContainer;