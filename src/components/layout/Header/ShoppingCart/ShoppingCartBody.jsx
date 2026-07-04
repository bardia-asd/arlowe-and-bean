/**
 * ShoppingCartBody
 *
 * Scrollable container for shopping cart items rendered inside the cart drawer.
 *
 * Responsible for layout and scrolling behavior only, while individual item
 * presentation is delegated to the ShoppingCartItem component.
 *
 * Currently renders placeholder content for demonstration purposes and will
 * eventually map over dynamic cart data.
 */
const ShoppingCartBody = () => {
    return (
        /*
         * flex-1 + min-h-0 allow the list to occupy the remaining drawer space
         * and become vertically scrollable without affecting the fixed footer.
         */
        <ul className="flex-1 flex flex-col min-h-0 px-5 sm:px-6 py-2 overflow-y-auto divide-y divide-border-light">
            {/* Individual cart item */}
            <ShoppingCartItem />
        </ul>
    );
};
