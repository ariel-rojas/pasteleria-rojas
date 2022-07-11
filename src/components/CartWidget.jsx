import{ShoppingCartIcon} from '@heroicons/react/outline'  
const CartWidget = () => {
    return ( 
        <>
        <ShoppingCartIcon className='w-5'/>
        <span>0</span>
        </>
    );
}
export default CartWidget;