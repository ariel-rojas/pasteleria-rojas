import Item from "./Item";

const ItemList = ({items}) => {
    return ( 
        <div className = "w-full h-screen flex flex-row flex-wrap justify-around items-center">
        {items.map((item) => {
            return <Item name={item.name} imgUrl={item.imgUrl} price={item.price} description={item.description} />
        })}
        </div>           
     );
}
 
export default ItemList;