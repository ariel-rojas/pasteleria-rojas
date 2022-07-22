import Item from "./Item";

const ItemList = ({items}) => {
    return ( 
        <div className = "w-screen flex flex-row flex-wrap justify-start items-center bg-zinc-200">
        {items.map((item) => {
            return <Item id ={item.id} name={item.name} imgURL={item.img1URL} price={item.price} artists={item.artists} />
        })}
        </div>           
     );
}
 
export default ItemList;