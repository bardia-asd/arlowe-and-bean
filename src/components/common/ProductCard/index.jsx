import PropTypes from "prop-types";
import useElementOnScreen from "@/hooks/useElementOnScreen";

/**
 * ProductCard
 *
 * Reusable card for displaying a single product (e.g. menu item) with
 * an image, name, price, and short description. Used in grid layouts
 * such as the menu page or "Popular Items" carousel.
 *
 * Fades in via `animate-fade-up` once 50% of the card is visible in
 * the viewport.
 *
 * @param {object} props
 * @param {string} props.src         - Image URL.
 * @param {string} props.alt         - Alt text for the image.
 * @param {string} props.name        - Product name.
 * @param {number} props.price       - Product price (numeric, formatted at render time).
 * @param {string} props.description - Short product description.
 * @returns {JSX.Element}
 */
const ProductCard = ({ src, alt, name, price, description }) => {
    const [containerRef, isVisible] = useElementOnScreen(0.5, "0px");

    return (
        // `group` enables the image scale-on-hover effect via group-hover below
        <article
            ref={containerRef}
            className={`group ${isVisible ? "animate-fade-up" : ""}`}>
            {/* Image — scales up slightly on card hover for a subtle interactive feel */}
            <div className="overflow-hidden rounded-2xl aspect-square mb-6 bg-latte">
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            <div className="flex items-center justify-between gap-4 mb-2">
                {/* line-clamp-1 + min-w-0 prevents long names from pushing the price off-card */}
                <h3 className="text-xl font-display min-w-0 line-clamp-1">
                    {name}
                </h3>
                <span className="font-medium text-caramel shrink-0">
                    {/* ${price.toFixed(2)} */}
                </span>
            </div>

            <p className="text-sm text-espresso/60 leading-relaxed mb-4 line-clamp-2">
                {description}
            </p>
        </article>
    );
};

ProductCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProductCard;
