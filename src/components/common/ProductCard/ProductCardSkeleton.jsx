const ProductCardSkeleton = () => {
    return (
        <div className="animate-pulse">
            {/* Mirrors the ProductCard image block */}
            <div className="overflow-hidden rounded-2xl aspect-square mb-6 bg-latte/60" />

            {/* Mirrors the name + price row */}
            <div className="flex items-center justify-between gap-4 mb-2">
                <div className="h-7 w-40 rounded-md bg-latte/60" />
                <div className="h-5 w-16 rounded-md bg-latte/60 shrink-0" />
            </div>

            {/* Mirrors the two-line description */}
            <div className="space-y-2">
                <div className="h-4 w-full rounded-md bg-latte/60" />
                <div className="h-4 w-3/4 rounded-md bg-latte/60" />
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
