import capuccinoImg from '../assets/capuccino.jpg'
import ItemCount from './ItemCount';

const Card = () => {
    return ( 
        <>
                <section className="w-full h-screen bg-zinc-200 mt-100 drop-shadow-lg">
            <div className = "w-full h-screen flex flex-row justify-around items-center mt-20">
                <div className = "flex flex-col w-[250px] h-[500px]">
                    <img className = "w-100"src={capuccinoImg} alt="Sunset in the mountains"></img>
                    <div className="w-full">
                        <h3>Café</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum mollitia corporis non ex distinctio, voluptate voluptas odio iste ratione eveniet.</p>
                        <ItemCount/>
                    </div>
                </div>
            </div>

            
        </section>
        </>
     );
}
 
export default Card;