import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

/**
 * Header
 *
 * Sticky site-wide header that contains the brand logo, desktop navigation,
 * and a hamburger toggle for the mobile navigation drawer.
 *
 * The mobile menu is closed automatically whenever the route changes so that
 * navigating to a new page always leaves the drawer in a collapsed state.
 *
 * @param {object} props - Component props (currently unused; reserved for future use).
 * @returns {JSX.Element} The rendered <header> element.
 */
const Header = (props) => {
    // Tracks whether the mobile navigation drawer is open or closed.
    const [open, setOpen] = useState(false);

    // Used to detect route changes so we can auto-close the mobile menu.
    const location = useLocation();

    /**
     * Close the mobile menu on every route change.
     * This prevents the drawer from staying open after the user taps a nav link.
     */
    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        /*
         * sticky + z-40: keeps the header above page content while scrolling.
         * backdrop-blur-md + bg-bg-primary/90: frosted-glass effect so content
         * scrolling underneath remains partially visible.
         */
        <header className="sticky top-0 z-40 w-full bg-bg-primary/90 backdrop-blur-md border-b border-border-light">
            <div className="container px-4 sm:px-6 mx-auto flex items-center justify-between gap-4 h-16 sm:h-20">
                {/* Brand logo / home link */}
                <Link
                    to="/"
                    className="font-heading font-bold text-xl sm:text-2xl underline decoration-secondary underline-offset-4 truncate">
                    Arlowe & Bean
                </Link>

                <div className="flex items-center gap-6 lg:gap-10">
                    {/* Desktop navigation — hidden on small screens via DesktopNav's own styles */}
                    <DesktopNav />

                    {/* Hamburger / close toggle — only rendered on screens narrower than `md` */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="p-2"
                            onClick={() => setOpen((prev) => !prev)}
                            // aria-label provides a descriptive name for screen readers
                            // since the button contains only an icon with no visible text.
                            aria-label={open ? "Close menu" : "Open menu"}
                            // aria-expanded communicates the current open/closed state
                            // to assistive technologies.
                            aria-expanded={open}
                            // aria-controls links this button to the drawer it controls,
                            // matching the `id` on the MobileNav element.
                            aria-controls="mobile-menu">
                            {/* Swap icon based on drawer state */}
                            {open ? <X /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation drawer — receives open state to handle show/hide internally */}
            <MobileNav menuOpen={open} />
        </header>
    );
};

export default Header;
