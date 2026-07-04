const ShoppingCartItem = () => {
    return (
        <li className="py-4 flex items-start gap-3 sm:gap-4">
            {/* Product thumbnail */}
            <img
                src={img}
                alt="Honeyed Oat Latte"
                className="size-14 rounded-lg object-cover"
                loading="lazy"
            />

            {/* Product details */}
            <div className="flex-1">
                <p className="font-medium truncate">Honeyed Oat Latte</p>

                {/* Unit price */}
                <p className="text-sm text-caramel">$6.50</p>

                {/* Quantity controls */}
                <div className="inline-flex items-center border border-border-dark rounded-full mt-2">
                    {/* Decrease quantity */}
                    <button
                        aria-label="Decrease quantity"
                        className="p-1.5 hover:text-accent">
                        <Minus size={14} />
                    </button>

                    <span className="px-2 text-sm">5</span>

                    {/* Increase quantity */}
                    <button
                        aria-label="Increase quantity"
                        className="p-1.5 hover:text-accent">
                        <Plus size={14} />
                    </button>
                </div>
            </div>

            {/* Item total and remove action */}
            <div className="shrink-0 flex flex-col items-end gap-2">
                {/* Line item total */}
                <p className="text-sm font-medium whitespace-nowrap">$52.00</p>

                {/* Remove item */}
                <button
                    aria-label="Remove Honeyed Oat Latte"
                    className="p-1 text-espresso/40 hover:text-red-500 transition-colors cursor-pointer">
                    <Trash2 size={16} />
                </button>
            </div>
        </li>
    );
};

export default ShoppingCartItem;
