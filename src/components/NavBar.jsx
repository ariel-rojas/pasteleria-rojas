import{MenuIcon,XIcon, SearchIcon, UserIcon} from '@heroicons/react/outline';
import CartWidget from './CartWidget';  
import { useState } from 'react';

const NavBar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return ( 
        <div className='w-screen h-100 z-10 bg-slate-800 md:bg-zinc-200 fixed drop-shadow-lg'>
            {/* creo un container */}
            <div className='flex  justify-between items-center w-full h-full flex-col'>
                <div className='flex  justify-between items-center w-full'>
                    <div className='md:hidden flex justify-center text-zinc-200' onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-8'/>:<XIcon className='w-8'/>}
                    </div>
                    <h1 className='flex justify center text-3xl text-zinc-200 md:text-slate-800 font-bold sm:text-4xl'>MARCA</h1>
                    <ul className='flex items-center text-zinc-200 md:text-slate-800'>
                        <li className=' flex pr-4'><SearchIcon className='w-8'/></li>
                        <li className=' flex pr-4'><UserIcon className='w-8'/></li>
                        <li className=' flex pr-4'><CartWidget/></li>
                    </ul>
                </div>
                <div className='flex  flex-col items-center w-full bg-slate-800 text-zinc-200'>
                    <ul className='hidden md:flex w-full justify-center'>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Reservas</li>
                        <li>Pedidos</li>
                        <li>Sobre Nosotros</li>
                    </ul>
                </div>

            </div> 
            <ul className={!nav? 'hidden':'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Inicio</li>
                <li className='border-b-2 border-zinc-300 w-full'>Productos</li>
                <li className='border-b-2 border-zinc-300 w-full'>Reservas</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pedidos</li>
                <li className='border-b-2 border-zinc-300 w-full'>Sobre Nosotros</li>         
                <div className='flex flex-col'>
                </div>    
            </ul>
        </div>
     );
}
 
export default NavBar;