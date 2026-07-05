import PropTypes from "prop-types";
import useElementOnScreen from "@/hooks/useElementOnScreen";
import Button from "../Button";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

/**
 * ProductCard
 *
 * Reusable product display card used across the menu and product grids.
 *
 * Responsibilities:
 * - Displays product image, name, price, and description
 * - Handles "Add to order" action via CartContext
 * - Triggers animation when entering viewport (fade-up effect)
 *
 * This component is presentational but also acts as a cart entry point.
 */

const ProductCard = ({ id, src, alt, name, price, description }) => {
    const [containerRef, isVisible] = useElementOnScreen(0.5, "0px");
    const { addItem } = useCart();

    /**
     * Cart item object passed to CartContext.
     * Keeps ProductCard decoupled from cart implementation details.
     */
    const item = {
        id,
        name,
        price,
        image: src,
        description,
    };

    return (
        // `group` enables hover-based image scaling effect
        <article
            ref={containerRef}
            className={`group flex flex-col ${
                isVisible ? "animate-fade-up" : ""
            }`}>
            {/* Product image */}
            <div className="overflow-hidden rounded-2xl aspect-square mb-6 bg-latte">
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Product title and price */}
            <div className="flex items-center justify-between gap-4 mb-2">
                {/* Prevent long titles from breaking layout */}
                <h3 className="text-xl font-display min-w-0 line-clamp-1">
                    {name}
                </h3>

                <span className="font-medium text-caramel shrink-0">
                    {/* ${price.toFixed(2)} */}
                </span>
            </div>

            {/* Short description */}
            <p className="text-sm text-espresso/60 leading-relaxed mb-4 line-clamp-2">
                {description}
            </p>

            {/* Add to cart action */}
            <Button
                onClick={() => addItem(item)}
                variant="ghost"
                size="none"
                className="mt-auto self-start">
                <span className="inline-flex items-center justify-center size-7 border border-border-dark rounded-full">
                    <Plus size={14} />
                </span>
                Add to order
            </Button>
        </article>
    );
};

ProductCard.propTypes = {
    id: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProductCard;
