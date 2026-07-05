// import useCart from "@/hooks/useCart";
import { useCart } from "@/context/CartContext";
import ShoppingCartItem from "./ShoppingCartItem";

/**
 * ShoppingCartBody
 *
 * Scrollable container responsible for rendering all cart items inside the drawer.
 *
 * Responsibilities:
 * - Reads cart state from CartContext
 * - Maps cart items into ShoppingCartItem components
 * - Passes item-level actions (increase, decrease, remove) down as props
 *
 * This component does not manage cart logic directly, it only delegates actions
 * to the context and renders UI.
 */
const ShoppingCartBody = () => {
    const { cart, removeItem, increaseQty, decreaseQty } = useCart();

    return (
        /*
         * flex-1 + min-h-0 allows this list to expand and remain scrollable
         * inside the cart drawer without pushing footer content.
         */
        <ul className="flex-1 flex flex-col min-h-0 px-5 sm:px-6 py-2 overflow-y-auto divide-y divide-border-light">
            {cart.length === 0 ? (
                <p className="text-sm text-espresso/60 py-6 text-center">
                    Your cart is empty
                </p>
            ) : (
                cart.map((item) => (
                    <ShoppingCartItem
                        key={item.id}
                        img={item.image}
                        alt={item.name}
                        name={item.name}
                        price={item.price}
                        qty={item.qty}
                        onDelete={() => removeItem(item.id)}
                        onIncrease={() => increaseQty(item.id)}
                        onDecrease={() => decreaseQty(item.id)}
                    />
                ))
            )}
        </ul>
    );
};

export default ShoppingCartBody;
