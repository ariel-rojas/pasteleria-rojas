import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { RadarSpinner } from 'react-epic-spinners'

// array de un elemento 
const ItemDetail = ({item, loaded=false}) => {
    const [amount, setAmount] = useState(0)
    const onAdd = (amount) => {
        setAmount(amount)
    }
    return ( 
        <>
        <div className='flex justify-center items-center bg-slate-50'>
            {!loaded?(
                <>
                <div className="w-full h-screen flex justify-center items-center">
                    <RadarSpinner color="red"/>
                </div>
                </>
            ):(
                <>
                    <div className = "flex flex-col w-[400px] h-[400px] m-[20px] text-center bg-center bg-no-repeat bg-contain" style={{backgroundImage: `url(${item.img1URL})`}}>
                    </div>
                    <div className = "flex flex-col w-[400px] h-[400px] m-[20px] text-center">
                        {/* <img className = "w-100" src={item.imgURL} alt="album musical"></img> */}
                        <div className="w-full h-[300px] flex flex-col justify-center text-center">
                            <h3 className='min-h-[4rem]'>{item.name}</h3>
                            <p>Artista: {item.artists}</p>
                            <p>Precio: ${item.price}</p>
                            <p>Lanzamiento: {item.year}</p>
                            {(amount === 0)?  (<ItemCount stock = {10} initial = {0} onAdd ={onAdd} />) : (<p> {amount} productos fueron agregados al carrito</p>)}
                            <Link to="/cart"><button>Ver carrito</button></Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    </>        
     );
}
 
export default ItemDetail;