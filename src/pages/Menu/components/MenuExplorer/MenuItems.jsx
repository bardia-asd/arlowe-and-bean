import PropTypes from "prop-types";
import ProductCard from "@/components/common/ProductCard";
import ProductCardSkeleton from "@/components/common/ProductCard/ProductCardSkeleton";

/**
 * MenuItems
 *
 * Displays a responsive grid of menu products.
 * While data is being fetched, skeleton placeholders are rendered
 * to preserve layout stability and provide a smoother loading experience.
 *
 * @param {Object} props
 * @param {Array} props.items - Collection of menu items to display.
 * @param {boolean} props.loading - Whether menu data is currently loading.
 *
 * @returns {JSX.Element}
 */
const MenuItems = ({ items, loading }) => {
    return (
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            {/* Responsive product grid */}
            <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
                {loading
                    ? // Render placeholder cards while data is loading.
                      Array.from({ length: 3 }).map((_, i) => (
                          <ProductCardSkeleton key={i} />
                      ))
                    : // Render actual menu items once data is available.
                      items.map((item) => (
                          <ProductCard
                              key={item.id}
                              id={item.id}
                              src={item.image_url}
                              alt={item.name}
                              name={item.name}
                              price={item.price}
                              description={item.description}
                          />
                      ))}
            </div>
        </section>
    );
};

MenuItems.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            image_url: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            description: PropTypes.string,
        }),
    ),
    loading: PropTypes.bool,
};

export default MenuItems;
