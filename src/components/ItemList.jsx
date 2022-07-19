import Item from "./Item";

const ItemList = ({items}) => {
    return ( 
        <div className = "w-screen flex flex-row flex-wrap justify-start items-center">
        {items.map((item) => {
            return <Item name={item.name} imgURL={item.imgURL} price={item.price} description={item.description} />
        })}
        </div>           
     );
}
 
export default ItemList;