import PropTypes from "prop-types";
import Button from "@/components/common/Button";

/**
 * Constant representing the "All categories" filter state.
 * Used instead of storing "all" in backend data.
 */
const ALL = null;

/**
 * CategoryFilter
 *
 * Sticky horizontal filter bar for menu categories.
 * Allows users to filter menu items by category or view all items.
 *
 * Features:
 * - Loading skeleton state while categories are being fetched
 * - Horizontal scrollable category list
 * - Active category highlighting
 * - "All" reset filter option
 *
 * @param {Object} props
 * @param {Array} props.categories - List of category objects
 * @param {boolean} props.loading - Loading state for categories
 * @param {string|null} props.selected - Currently selected category id
 * @param {Function} props.onSelect - Callback when category is selected
 *
 * @returns {JSX.Element}
 */
const CategoryFilter = ({ categories, loading, selected, onSelect }) => {
    return (
        <div className="sticky top-16 sm:top-20 z-40 bg-bg-secondary/90 backdrop-blur-md border-y border-border-light">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Loading skeleton state */}
                {loading ? (
                    <div className="flex gap-2 md:gap-4 py-3 sm:py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-border-dark">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-10 w-24 rounded-full bg-latte/60 animate-pulse"
                            />
                        ))}
                    </div>
                ) : (
                    /* Category filter buttons */
                    <div className="flex gap-2 md:gap-4 py-3 sm:py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-border-dark">
                        {/* Reset to all categories */}
                        <Button
                            variant={selected === ALL ? "solid" : "ghost"}
                            type="button"
                            size="small"
                            onClick={() => onSelect(null)}
                            className="capitalize">
                            all
                        </Button>

                        {/* Render dynamic categories */}
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={
                                    selected === category.id ? "solid" : "ghost"
                                }
                                type="button"
                                size="small"
                                onClick={() => onSelect(category.id)}
                                className="capitalize">
                                {category.name}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

/**
 * PropTypes validation for CategoryFilter component
 */
CategoryFilter.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string,
            display_order: PropTypes.number,
        }),
    ),
    loading: PropTypes.bool,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf([null]),
    ]),
    onSelect: PropTypes.func,
};

export default CategoryFilter;
