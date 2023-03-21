import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(product, qty) {
        var newItem = { ...product, quantity: qty }
        var itemIndex = cart.findIndex(function findProduct(item) {
            return item.id === product.id
        })
        if (itemIndex !== -1) {
            var newCart = [...cart].map((item, index) => {
                if (index === itemIndex) {
                    return { ...item, quantity: qty }
                }
                return item;
            })
            setCart(newCart);
        } else {
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id) {
        var newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;