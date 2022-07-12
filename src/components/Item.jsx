import ItemCount from './ItemCount';

const Item = (props) => {
    return ( 
        <>
        <div className = "flex flex-col w-[250px] h-[500px]">
            {/* <img className = "w-100" src={props.imgUrl} alt="Sunset in the mountains"></img> */}
            <div className="w-full">
                <h3>{props}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <ItemCount stock = {10} initial = {0} onAdd ={() => console.log("se agregó al carrito")} />
            </div>
        </div>
        </>
     );
}
 
export default Item;

