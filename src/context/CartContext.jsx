import { createContext, useContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

/**
 * Shared cart context used throughout the application.
 */
const CartContext = createContext();

/**
 * CartProvider
 *
 * Manages shopping cart state and exposes helper methods
 * for adding, removing, updating quantities, and clearing items.
 *
 * Cart data is persisted in localStorage so it survives page refreshes.
 */
export const CartProvider = ({ children }) => {
    // Persist cart contents between sessions.
    const [cart, setCart] = useLocalStorage("cart", []);

    /**
     * Add an item to the cart.
     *
     * If the item already exists, increment its quantity.
     * Otherwise add it with an initial quantity of 1.
     */
    const addItem = (item) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);

            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
                );
            }

            return [...prev, { ...item, qty: 1 }];
        });
    };

    /**
     * Remove an item entirely from the cart.
     */
    const removeItem = (id) =>
        setCart((prev) => prev.filter((i) => i.id !== id));

    /**
     * Increase an item's quantity by one.
     */
    const increaseQty = (id) =>
        setCart((prev) =>
            prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)),
        );

    /**
     * Decrease an item's quantity.
     *
     * Items reaching zero quantity are removed automatically.
     */
    const decreaseQty = (id) =>
        setCart((prev) =>
            prev
                .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
                .filter((i) => i.qty > 0),
        );

    /**
     * Empty the entire cart.
     */
    const clearCart = () => setCart([]);

    /**
     * Total number of items currently in the cart.
     */
    const itemCount = cart.reduce((total, item) => total + item.qty, 0);

    /**
     * Sum of all item prices multiplied by quantity.
     */
    const subTotal = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0,
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                increaseQty,
                decreaseQty,
                clearCart,
                itemCount,
                subTotal,
            }}>
            {children}
        </CartContext.Provider>
    );
};

/**
 * Convenience hook for accessing cart state and actions.
 */
export const useCart = () => useContext(CartContext);
