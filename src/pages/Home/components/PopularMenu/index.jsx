import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import PopularGrid from "./PopularGrid";

/**
 * PopularMenu
 *
 * Homepage section that introduces a curated/preview slice of the menu.
 * Composes a section header (title + "View full menu" link) with the
 * PopularGrid of product cards below it.
 *
 * @returns {JSX.Element}
 */
const PopularMenu = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-bg-secondary">
            <div className="container px-4 sm:px-6 mx-auto">
                {/*
                 * Header row — title + underline accent on the left,
                 * "View full menu" link on the right.
                 * Stacks vertically on mobile, sits side-by-side from md+.
                 * items-end aligns the link with the baseline of the title
                 * rather than the top, since the title block is taller.
                 */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <h2 className="text-3xl sm:text-4xl mb-4">
                            Seasonal Favorites
                        </h2>
                        {/* Decorative accent underline beneath the heading */}
                        <div className="h-1 w-20 bg-caramel"></div>
                    </div>

                    {/*
                     * Ghost-variant Button rendered as a router Link.
                     * size="none" removes default button padding since this
                     * is styled as an underlined text link, not a pill button.
                     */}
                    <Button
                        to="menu"
                        as={Link}
                        variant="ghost"
                        size="none"
                        className="uppercase tracking-widest underline underline-offset-8 decoration-accent decoration-2 self-start md:self-auto">
                        View full menu
                        <ArrowRight size={18} />
                    </Button>
                </div>

                <PopularGrid />
            </div>
        </section>
    );
};

export default PopularMenu;
