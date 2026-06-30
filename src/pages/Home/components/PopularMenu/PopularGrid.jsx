import useFetch from "@/hooks/useFetch";
import ProductCard from "@/components/common/ProductCard";

/**
 * PopularGrid
 *
 * Fetches all menu items and renders the first five as a responsive
 * grid of ProductCards. Used on the homepage to showcase a "Popular
 * Items" preview without sending users straight to the full menu.
 *
 * Note: "popular" here is just the first 5 rows returned by the query,
 * not an actual popularity ranking — see flag below.
 *
 * @returns {JSX.Element}
 */
const PopularGrid = () => {
    const { data, loading, error } = useFetch("menu_items");

    // Take only the first 5 items for the homepage preview.
    const popularMenu = data.slice(0, 5);

    return (
        // Responsive column count: 1 → 2 → 3 columns as viewport widens
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
            {popularMenu.map((menu) => (
                <ProductCard
                    key={menu.id}
                    src={menu.image_url}
                    name={menu.name}
                    price={menu.price}
                    description={menu.description}
                    alt={menu.name}
                />
            ))}
        </div>
    );
};

export default PopularGrid;
