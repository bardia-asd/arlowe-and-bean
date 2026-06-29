import heroImg from "@/assets/hero.jpg";
import useElementOnScreen from "@/hooks/useElementOnScreen";

/**
 * HeroImage
 *
 * Right-hand visual block for the homepage hero section.
 * Renders the main hero photograph with a floating pull-quote card
 * overlaid at the bottom-left corner.
 *
 * Animates in via `animate-fade-up` once 50% of the block enters the
 * viewport — mirrors the animation behaviour of HeroContent so both
 * halves of the hero enter together.
 *
 * @returns {JSX.Element}
 */
const HeroImage = () => {
    const [containerRef, isVisible] = useElementOnScreen(0.5, "0px");

    return (
        /*
         * `relative` establishes the positioning context for the
         * absolute-positioned pull-quote card below.
         */
        <div
            ref={containerRef}
            className={`relative ${isVisible ? "animate-fade-up" : ""}`}>
            {/*
             * Image wrapper — aspect-4/5 locks the portrait ratio across all
             * screen sizes. overflow-hidden clips the image to the rounded corners.
             */}
            <div className="w-full aspect-4/5 overflow-hidden rounded-3xl shadow-2xl">
                <img
                    src={heroImg}
                    // Descriptive alt text conveys the scene for screen readers;
                    // avoids generic text like "hero image".
                    alt="Latte with heart art beside a fresh croissant on an oak table"
                    // object-cover fills the fixed aspect-ratio container without
                    // distorting the image.
                    className="w-full h-full object-cover"
                />
            </div>

            {/*
             * Pull-quote card — floats over the bottom-left corner of the image.
             * Negative offsets (-bottom-6 -left-6) let it bleed outside the image
             * boundary for a layered depth effect.
             * Hidden below lg breakpoint to avoid overlap on smaller layouts.
             */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 max-w-56 p-6 bg-bg-surface rounded-xl shadow-xl">
                {/* <q> renders typographic quotation marks around the text automatically */}
                <p className="font-heading italic text-xl text-secondary">
                    <q>The best morning ritual.</q>
                </p>
                {/* Em dash prefix on the attribution is a typographic convention for pull-quotes */}
                <p className="mt-2 text-xs uppercase tracking-widest text-espresso/50 font-medium">
                    — The Daily Brew
                </p>
            </div>
        </div>
    );
};

export default HeroImage;
