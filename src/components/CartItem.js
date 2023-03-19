import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";

function CartItem({ item }) {
    var { id, name, image, price, amount } = item
    const { addToCart, removeFromCart} = useContext(CartContext)
    
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full">
            <div className="w-full min-h-[150px] flex items-center gap-x-2">
                <div>
                    <Link to={`product/${id}`}>
                        <img className="max-w-[80px]" src={image} alt="some-img"></img>
                    </Link>
                </div>

                <div className="w-full flex flex-col">
                    <div className="flex justify-between mb-2">
                        <Link to={`product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                            {name}
                        </Link>
                        <div className="text-xl cursor-pointer"
                            onClick={() => { removeFromCart(id)}}
                        >
                            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                        </div>
                    </div>
                    <div className="flex gap-x-2 h-[36px] text-sm ">
                        <div className="flex flex-1 max-w-[100px] items-center h-full text-primary font-medium">
                            <div className="flex h-full flex-1 justify-center items-center cursor-pointer border"
                                
                            > <IoMdRemove /> </div>
                            <div className="flex h-full justify-center items-center px-2"> { amount } </div>
                            <div className="flex h-full flex-1 justify-center items-center cursor-pointer border"> <IoMdAdd /> </div>
                        </div>
                        <div className="flex flex-1 justify-around items-center text-primary font-light">
                            ${price}
                        </div>
                        <div className="flex flex-1 justify-end items-center text-primary font-medium">
                            ${`${ parseFloat(price * amount).toFixed(2) }`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;