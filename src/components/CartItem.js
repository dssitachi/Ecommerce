import { useContext, useState } from "react";
import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { CartContext } from "../contexts/CartContext";

var qtyList = [1, 2, 3, 4, 5];

function CartItem({ product }) {

    const [qty, setQty] = useState(1);
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    
    function handleQtyChange(e) {
        setQty(e);
        addToCart(product, e);
    }

    function handleRemoveFromCart() {
        removeFromCart(product.id);
    }

    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">Rs. {product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-gray-500">Qty</p>

                        <Listbox value={product.qty} onChange={ handleQtyChange } >
                            <div className="relative">
                                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <span className="block truncate">{product.quantity}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {qtyList.map((qty) => (
                                        <Listbox.Option
                                            key={qty}
                                            value={qty}
                                            className={({ active, selected }) =>
                                                `${active ? 'text-white bg-[#A4907C]' : 'text-gray-900'} ${selected ? 'font-medium' : 'font-normal'
                                                } py-2 px-4 cursor-default`}
                                        >
                                            {qty}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </div>
                        </Listbox>

                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-[#A4907C]"
                            onClick={handleRemoveFromCart}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem;