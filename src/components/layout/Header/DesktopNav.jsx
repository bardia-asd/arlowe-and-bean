import { NavLink } from "react-router";
import Button from "@/components/common/Button";

/*
 * Shared className logic for standard nav links.
 * Defined once here to avoid repeating the same ternary on every NavLink.
 *
 * Active state:   full-colour text + underline that transitions to accent on hover.
 * Inactive state: muted text-secondary, no underline.
 */
const navLinkClass = ({ isActive }) =>
    `text-sm font-medium uppercase hover:text-accent transition-colors duration-75 ${
        isActive
            ? "text-text-primary underline decoration-text-primary hover:decoration-accent underline-offset-4"
            : "text-text-secondary"
    }`;

/**
 * DesktopNav
 *
 * Horizontal navigation bar rendered inside the Header on medium+ screens.
 * Hidden on small screens (`hidden md:block`) where MobileNav takes over.
 *
 * Each NavLink receives a render prop for `className` so React Router can
 * inject the `isActive` flag — active links get an underline treatment to
 * indicate the current page, while inactive links render in a muted colour.
 *
 * @returns {JSX.Element}
 */
const DesktopNav = () => {
    return (
        <nav className="hidden md:block">
            <div className="flex items-center gap-6 lg:gap-10">
                {/* Standard nav links — use the shared active/inactive className helper */}
                <NavLink to="menu" className={navLinkClass}>
                    Menu
                </NavLink>
                <NavLink to="about-us" className={navLinkClass}>
                    Our Story
                </NavLink>
                <NavLink to="visit" className={navLinkClass}>
                    Visit
                </NavLink>

                {/* Primary CTA — static pill-button styles, no active state needed */}
                <Button to="menu" size="small" as={NavLink}>
                    Order Online
                </Button>
            </div>
        </nav>
    );
};

export default DesktopNav;
