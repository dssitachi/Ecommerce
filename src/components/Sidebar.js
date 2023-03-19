import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { SideBarContext } from '../contexts/SidebarContext';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

function Sidebar() {
    
    const {isOpen, closeSidebar, clearCart} = useContext(SideBarContext);
    const { cart, addToCart } = useContext(CartContext);

    return (
        <aside className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] 
            transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            
            <div className="flex items-center justify-between py-6 border-b">
                <h3 className="uppercase text-sm font-semibold"> Shopping Bag (0)</h3>

                <div className="cursor-pointer w-8 h-8 flex justify-center items-center"
                    onClick={closeSidebar }
                >
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>

            <section>
                { cart.map(function displayCartItem(item) {
                    return <CartItem item={item} key={item.id} />
                })}
            </section>

            <div>
                <div className="bg-pink flex w-full justify-between items-center">
                    <div>
                        <span>Total:</span>
                    </div>
                    <div className="cursor-pointer py-5 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
                        onClick={() => { clearCart(); }}
                    >
                        <FiTrash2 />
                    </div>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar;