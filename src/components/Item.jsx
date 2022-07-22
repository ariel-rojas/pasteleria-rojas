import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
const Item = (props) => {
    return ( 
        <>
        <div className = "flex flex-col w-[300px] h-[300px] m-[20px] text-center bg-center bg-no-repeat bg-contain" style={{backgroundImage: `url(${props.imgURL})`}}>
            {/* <img className = "w-100" src={props.imgURL} alt="album musical"></img> */}
            <div className="w-full h-[300px] flex flex-col justify-center text-center bg-zinc-400 opacity-0 hover:opacity-90">
                <h3 className='min-h-[4rem]'>{props.name}</h3>
                <p>{props.artists}</p>
                <p>{props.price}</p>
                <Link to={`/item/${props.id}`}>
                    <button>
                        Ver detalles
                    </button>
                </Link>
                {/* <ItemCount stock = {10} initial = {0} onAdd ={() => console.log("se agregó al carrito")} /> */}
            </div>
        </div>
        </>
     );
}
 
export default Item;

