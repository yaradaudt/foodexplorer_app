import { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})

export function CartProvider({ children }) {
    const [cartItems, setCartItems ] = useState([])

    const addToCart = (newItem) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id)

            if(existingItemIndex > -1) {
                const updatedItems = [...prevItems]
                updatedItems[existingItemIndex].quantity += newItem.quantity
                return updatedItems
            } else {
                return [...prevItems, newItem]
            }
        })
            alert('Adicionado ao carrinho com sucesso!')
        }

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    return (
        <CartContext.Provider  value={{ cartItems, addToCart, cartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export function  useCart() {
    return useContext(CartContext)
}

