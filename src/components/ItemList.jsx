import Item from "./Item";
import { RadarSpinner } from 'react-epic-spinners'

const ItemList = ({items, loaded=false}) => {
    return ( 
        <div className = "w-screen h-screen flex flex-row flex-wrap justify-start items-center bg-zinc-200">
            {!loaded ?(
                <>
                <div className="w-full h-screen flex justify-center items-center">
                    <RadarSpinner color="red"/>
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