import PropTypes from "prop-types";
import { Minus, Plus, Trash2 } from "lucide-react";

/**
 * ShoppingCartItem
 *
 * Represents a single product row inside the shopping cart drawer.
 *
 * Responsibilities:
 * - Displays product image, name, and unit price
 * - Shows quantity controls (increase / decrease)
 * - Displays computed line total (price × quantity)
 * - Provides delete action to remove item from cart
 *
 * This component is fully controlled via props and does not manage state.
 */

const ShoppingCartItem = ({
    img,
    alt,
    name,
    price,
    qty,
    onIncrease,
    onDecrease,
    onDelete,
}) => {
    return (
        <li className="py-4 flex items-start gap-3 sm:gap-4">
            {/* Product thumbnail */}
            <img
                src={img}
                alt={alt}
                className="size-14 rounded-lg object-cover"
                loading="lazy"
            />

            {/* Product details */}
            <div className="flex-1">
                <p className="font-medium truncate">{name}</p>

                {/* Unit price */}
                <p className="text-sm text-caramel">${price.toFixed(2)}</p>

                {/* Quantity controls */}
                <div className="inline-flex items-center border border-border-dark rounded-full mt-2">
                    {/* Decrease quantity */}
                    <button
                        aria-label="Decrease quantity"
                        className="p-1.5 hover:text-accent"
                        onClick={onDecrease}>
                        <Minus size={14} />
                    </button>

                    <span className="px-2 text-sm">{qty}</span>

                    {/* Increase quantity */}
                    <button
                        aria-label="Increase quantity"
                        className="p-1.5 hover:text-accent"
                        onClick={onIncrease}>
                        <Plus size={14} />
                    </button>
                </div>
            </div>

            {/* Item total and remove action */}
            <div className="shrink-0 flex flex-col items-end gap-2">
                {/* Line item total */}
                <p className="text-sm font-medium whitespace-nowrap">
                    ${(price * qty).toFixed(2)}
                </p>

                {/* Remove item */}
                <button
                    aria-label={`Remove ${name}`}
                    className="p-1 text-espresso/40 hover:text-red-500 transition-colors cursor-pointer"
                    onClick={onDelete}>
                    <Trash2 size={16} />
                </button>
            </div>
        </li>
    );
};

ShoppingCartItem.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
    onDelete: PropTypes.func,
};

export default ShoppingCartItem;
