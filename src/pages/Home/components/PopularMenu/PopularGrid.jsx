import useFetch from "@/hooks/useFetch";
import ProductCard from "@/components/common/ProductCard";
import ProductCardSkeleton from "@/components/common/ProductCard/ProductCardSkeleton";

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

    /*
     * Loading state — renders 3 skeleton cards that mirror the real
     * ProductCard layout (image square, title/price row, two-line
     * description) so the grid doesn't visually "jump" once real data
     * arrives. animate-pulse (Tailwind) handles the shimmer effect.
     */
    if (loading) {
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
                {/* Array.from({ length: 3 }) generates 3 placeholder slots — no real data needed */}
                {Array.from({ length: 3 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                ))}
            </div>
        );
    }

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
