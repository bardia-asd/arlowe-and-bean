import { NavLink } from "react-router";
import Button from "@/components/common/Button";

/**
 * MobileNav
 *
 * Collapsible navigation drawer rendered below the Header on small screens.
 * Visibility is controlled by the parent via `menuOpen` — the component uses
 * max-height + opacity transitions instead of conditional rendering so the
 * CSS animation plays on both open and close.
 *
 * The `id="mobile-menu"` matches the `aria-controls="mobile-menu"` on the
 * hamburger button in Header, linking them for assistive technologies.
 *
 * @param {object}  props
 * @param {boolean} props.menuOpen - Whether the drawer is currently open.
 * @returns {JSX.Element}
 */
const MobileNav = ({ menuOpen }) => {
    return (
        /*
         * max-h-0 / max-h-96 + opacity: animate the drawer open and closed
         * without unmounting it, which preserves the transition in both directions.
         * md:hidden: the entire drawer is removed from layout on medium+ screens
         * where DesktopNav is shown instead.
         */
        <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden w-full border-t border-border-light transition-all duration-150 ${
                menuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
            }`}>
            <div className="flex flex-col gap-1 py-4 px-4 sm:px-6">
                {/* Standard nav links — uppercase small-caps style matches the desktop nav */}
                <NavLink
                    to="menu"
                    className="py-3 text-sm font-medium uppercase hover:text-accent transition-colors duration-75">
                    Menu
                </NavLink>
                <NavLink
                    to="about-us"
                    className="py-3 text-sm font-medium uppercase hover:text-accent transition-colors duration-75">
                    Our Story
                </NavLink>
                <NavLink
                    to="contact"
                    className="py-3 text-sm font-medium uppercase hover:text-accent transition-colors duration-75">
                    Visit
                </NavLink>

                {/* Primary CTA — pill-shaped button that stands out from the plain text links above */}
                <Button
                    to="menu"
                    size="small"
                    as={NavLink}
                    className="uppercase">
                    Order Online
                </Button>
            </div>
        </div>
    );
};

export default MobileNav;
