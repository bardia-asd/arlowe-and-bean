import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ShoppingBag, X } from "lucide-react";
import Button from "@/components/common/Button";
import ShoppingCartBody from "./ShoppingCartBody";

/**
 * ShoppingCart
 *
 * Slide-out shopping cart drawer rendered through a React portal.
 * Locks page scrolling while open and provides an overlay backdrop
 * that dismisses the drawer when clicked.
 *
 * Uses translate transforms and opacity transitions for smooth
 * open/close animations without unmounting the component.
 */
const ShoppingCart = () => {
    // Tracks whether the shopping cart drawer is open.
    const [open, setOpen] = useState(true);

    /**
     * Prevent background scrolling while the cart is visible.
     * Restores normal page scrolling when closed or unmounted.
     */
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => (document.body.style.overflow = "");
    }, [open]);

    return (
        <div>
            {/* Cart trigger button */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative flex items-center justify-center size-9 hover:text-accent transition-colors cursor-pointer"
                aria-label="Open shopping cart"
                aria-expanded={open}
                aria-controls="shopping-cart">
                {/* Shopping bag icon */}
                <ShoppingBag size={24} aria-hidden="true" />
                {/* Item count badge */}
                <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center size-5 text-xs bg-primary rounded-full text-text-inverse">
                    3
                </span>
            </button>

            {/* Portal ensures the drawer is rendered at the document root
               so it isn't affected by parent stacking contexts */}
            {createPortal(
                <>
                    {/* Backdrop overlay */}
                    <div
                        onClick={() => setOpen(false)}
                        className={`fixed inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity duration-200 z-50 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    />
                    {/* Sliding cart panel */}
                    <aside
                        id="shopping-cart"
                        aria-label="Shopping cart"
                        className={`fixed top-0 right-0 flex flex-col w-full sm:w-96 h-screen bg-bg-surface border-l border-border-light shadow-sm transition-transform duration-200 z-60 ${open ? "translate-x-0" : "translate-x-full"}`}>
                        {/* Drawer header */}
                        <header className="shrink-0 flex items-center justify-between border-b border-border-light px-5 sm:px-6 h-16 sm:h-20">
                            <h2 className="text-xl sm:text-2xl">Your Order</h2>
                            {/* Close drawer button */}
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-center size-9 hover:text-accent transition-colors cursor-pointer"
                                aria-label="Close shopping cart">
                                <X size={20} aria-hidden="true" />
                            </button>
                        </header>
                        {/* TODOS Cart items will be rendered here later */}
                        {/* CartBody */}
                        <ShoppingCartBody />

                        {/* Order summary and checkout */}
                        <footer className="px-5 sm:px-6 py-4 sm:py-5 space-y-3 sm:space-y-4 shrink-0 border-t border-border-light">
                            <div className="flex items-center justify-between">
                                <p className="text-text-primary uppercase tracking-widest text-sm">
                                    Subtotal(8 items)
                                </p>
                                <p className="font-medium">$52.00</p>
                            </div>
                            <Button
                                className="w-full"
                                aria-label="Proceed to checkout">
                                Checkout
                            </Button>
                        </footer>
                    </aside>
                </>,
                document.body,
            )}
        </div>
    );
};

export default ShoppingCart;
