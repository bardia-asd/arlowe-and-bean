import { Link } from "react-router";
import Button from "@/components/common/Button";
import PageHeader from "@/components/common/PageHeader";
import useElementOnScreen from "@/hooks/useElementOnScreen";

/**
 * HeroContent
 *
 * Left-hand content block for the homepage hero section.
 * Contains the page heading and the two primary CTAs.
 *
 * Animates in via `animate-fade-up` once 50% of the block enters the viewport,
 * using the `useElementOnScreen` hook to detect intersection.
 *
 * @returns {JSX.Element}
 */
const HeroContent = () => {
    /*
     * Observe this block and trigger the fade-up animation once half of it
     * is visible. 0.5 threshold means 50% of the element must be in the
     * viewport before `isVisible` flips to true.
     */
    const [containerRef, isVisible] = useElementOnScreen(0.5, "0px");

    return (
        <div
            ref={containerRef}
            // Apply the animation class only after the element enters the viewport.
            // The element renders without animation on first paint, then fades up on scroll.
            className={`${isVisible ? "animate-fade-up" : ""}`}>
            {/* Page heading block — copy and subtitle are specific to the home hero */}
            <PageHeader
                title="The Quiet Art of the"
                italic="Perfect Pour."
                subtitle="Est. 2014 · London"
                description="A sanctuary for the senses. We pair ethically sourced micro-lots with artisanal pastries, served in a space designed for slow mornings and focused afternoons"
                className="mb-8 sm:mb-10 max-w-xl"
            />

            {/*
             * CTA row — stacks vertically on mobile, switches to a horizontal
             * row on md+ screens.
             * Primary action: menu exploration.
             * Secondary action: space/about page (outline variant for visual hierarchy).
             */}
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <Button to="menu" as={Link}>
                    View Today's Menu
                </Button>
                <Button to="about-us" variant="outline" as={Link}>
                    Explore the Space
                </Button>
            </div>
        </div>
    );
};

export default HeroContent;
