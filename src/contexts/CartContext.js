import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(product, id) {
        var newItem = { ...product, amount: 1 }
        var cartItem = cart.find(function findProduct(item) {
            return item.id === id
        })
        if (cartItem) {
            var newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
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

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;