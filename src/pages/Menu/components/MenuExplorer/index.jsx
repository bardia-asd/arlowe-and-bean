import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import MenuItems from "./MenuItems";
import useFetch from "@/hooks/useFetch";

/**
 * MenuExplorer
 *
 * Main container component for the menu page.
 * Responsible for:
 * - Fetching menu items and categories from the backend
 * - Managing selected category state
 * - Filtering menu items based on selected category
 * - Coordinating CategoryFilter and MenuItems components
 *
 * Acts as the central orchestrator for menu data and UI state.
 */
const MenuExplorer = () => {
    // Fetch menu items data
    const { data: items, loading: itemsLoading } = useFetch("menu_items");

    // Fetch category data
    const { data: categories, loading: categoriesLoading } =
        useFetch("categories");

    // Currently selected category (null means "All categories")
    const [selectedCategory, setSelectedCategory] = useState(null);

    /**
     * Filter menu items based on selected category.
     * If no category is selected, show all items.
     */
    const filteredItems = selectedCategory
        ? items.filter((item) => item.category_id === selectedCategory)
        : items;

    return (
        <div>
            {/* Category filter bar */}
            <CategoryFilter
                categories={categories}
                loading={categoriesLoading}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            {/* Menu grid with loading support */}
            <MenuItems items={filteredItems} loading={itemsLoading} />
        </div>
    );
};

export default MenuExplorer;
