import Item from "./Item";
import Spinner from "./Spinner";

const ItemList = ({items}, loaded=false) => {
    return ( 
        <div className = "w-screen flex flex-row flex-wrap justify-start items-center bg-zinc-200">
            {!loaded ?(
                <>
                console.log("entrooo")
                    <div className="bg-black h-full">
                        <h1>HOLA</h1>
                    </div>
                </>
            ) : (
                items.map((item) => {
                    return <Item id ={item.id} name={item.name} img1URL={item.img1URL} img2URL = {item.img2URL} price={item.price} artists={item.artists} />
                })
            )}
        
        </div>           
     );
}
 
export default ItemList;