import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

/**
 * HeroSection
 *
 * Full-width homepage hero that composes HeroContent and HeroImage
 * into a two-column layout on large screens, stacking to a single
 * column on smaller viewports.
 *
 * Layout:
 *   mobile/tablet  → single column, content above image
 *   lg+            → two equal columns, content left / image right
 *
 * @returns {JSX.Element}
 */
const HeroSection = () => {
    return (
        /*
         * Fluid vertical padding scales across breakpoints to give the
         * hero progressively more breathing room on larger screens.
         */
        <section className="px-4 sm:px-6 py-10 sm:py-16 md:py-20 lg:py-24">
            {/*
             * items-center vertically aligns the two columns so neither
             * side looks anchored to the top when their heights differ.
             */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
};

export default HeroSection;
