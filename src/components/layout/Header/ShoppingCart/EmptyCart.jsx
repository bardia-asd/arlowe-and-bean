import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import Button from "@/components/common/Button";

const EmptyCart = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center">
            {/* Icon */}
            <div className="size-14 rounded-full bg-latte flex items-center justify-center mb-4">
                <ShoppingBag className="text-espresso/60" size={22} />
            </div>

            {/* Text */}
            <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>

            <p className="text-sm text-espresso/60 mb-6">
                Add some items from the menu to get started
            </p>

            {/* Link to menu */}
            <Button as={Link} to="/menu" className="uppercase   ">
                Browse Menu
            </Button>
        </div>
    );
};

export default EmptyCart;
