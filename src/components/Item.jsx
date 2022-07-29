import { Link } from 'react-router-dom';
import { useState } from 'react';
const Item = (props) => {

    const [Hover, setHover] = useState(false)

    return ( 
        <>
        <div className='w-[300px] h-[300px] m-[20px] bg-white'>
            <Link to={`/item/${props.id}`}>
                <div className = "flex flex-col w-[300px] h-[300px]  text-center bg-center bg-no-repeat bg-contain justify-center" 
                style={{backgroundImage: `url(${!Hover?props.img1URL:props.img2URL})`}}
                onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
                    <div className='flex flex-col justify-center items-center w-full h-full opacity-0 hover:opacity-100'>
                        <div className="flex h-[120px] w-[180px] m-2 flex-col justify-center  text-center bg-[#ffffffb5]">
                            <h3 className='min-h-[2rem]'>{props.name}</h3>
                            <p>{props.artists}</p>
                            <p>${props.price}</p>
                        </div>
                                <button className='min-h-[5rem] bg-red-500 border-red-800'>
                                    Ver detalles
                                </button>
                    </div>

                </div>
            </Link>
        </div>
        </>
     );
}
 
export default Item;

