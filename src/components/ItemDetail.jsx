import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

// array de un elemento 
const ItemDetail = ({item}) => {
    console.log('el objeto es:')
    console.log(item)
    return ( 
        <>
        <div className='flex h-[500px] justify-center items-center bg-slate-50'>
            <div className = "flex flex-col w-[400px] h-[400px] m-[20px] text-center bg-center bg-no-repeat bg-contain" style={{backgroundImage: `url(${item.img1URL})`}}>
            </div>
            <div className = "flex flex-col w-[400px] h-[400px] m-[20px] text-center">
                {/* <img className = "w-100" src={item.imgURL} alt="album musical"></img> */}
                <div className="w-full h-[300px] flex flex-col justify-center text-center">
                    <h3 className='min-h-[4rem]'>{item.name}</h3>
                    <p>Artista: {item.artists}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Lanzamiento: {item.year}</p>
                    <ItemCount stock = {10} initial = {0} onAdd ={() => console.log("se agregó al carrito")} />
                </div>
            </div>
        </div>

    </>        
     );
}
 
export default ItemDetail;