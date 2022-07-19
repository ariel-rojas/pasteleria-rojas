import ItemCount from './ItemCount';

const Item = (props) => {
    return ( 
        <>
        <div className = "flex flex-col w-[250px] h-[500px] m-[20px] text-center ">
            <img className = "w-100" src={props.imgURL} alt="Sunset in the mountains"></img>
            <div className="w-full flex flex-col text-center bg-zinc-400">
                <h3 className='flex min-h-[4rem] text-center'>{props.name}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <ItemCount stock = {10} initial = {0} onAdd ={() => console.log("se agregó al carrito")} />
            </div>
        </div>
        </>
     );
}
 
export default Item;

