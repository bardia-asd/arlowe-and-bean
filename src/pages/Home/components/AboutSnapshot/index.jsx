import interiorImg from "@/assets/interior.jpg";
import ritualImg from "@/assets/ritual.jpg";
import craftImg from "@/assets/craft.jpg";
import useElementOnScreen from "@/hooks/useElementOnScreen";
import { Coffee, Leaf, ShoppingBag, Wifi } from "lucide-react";

/**
 * Snapshot features displayed inside the cafe information card.
 * Keeping these in a dedicated array makes the list easier to
 * maintain and render declaratively with `.map()`.
 */
const FEATURES = [
    {
        icon: Wifi,
        label: "Fiber WiFi",
    },
    {
        icon: Coffee,
        label: "24 Seats",
    },
    {
        icon: ShoppingBag,
        label: "Takeaway",
    },
    {
        icon: Leaf,
        label: "Quiet Hours",
    },
];

/**
 * AboutSnapshot
 *
 * Highlights the atmosphere and amenities of the cafe through
 * a combination of imagery and supporting information.
 *
 * Uses `useElementOnScreen` to trigger a one-time entrance
 * animation when the section first becomes visible.
 *
 * Layout:
 * - Left column: hero interior photograph.
 * - Right column: descriptive content and feature list.
 * - Bottom row: supporting lifestyle imagery.
 *
 * @returns {JSX.Element}
 */
const AboutSnapshot = () => {
    /*
     * Observe the section and apply the fade-up animation
     * only the first time it scrolls into view.
     */
    const [containerRef, isVisible] = useElementOnScreen(0.5, "0px");

    return (
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
            <div className="container px-4 sm:px-6 mx-auto">
                <div
                    ref={containerRef}
                    className={isVisible ? "animate-fade-up" : ""}>
                    <div className="grid lg:grid-cols-5 gap-4">
                        {/* Main interior photograph */}
                        <div className="lg:col-span-2 overflow-hidden rounded-2xl">
                            <img
                                src={interiorImg}
                                alt="Cafe interior with hanging plants and oak tables"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Content and supporting imagery */}
                        <div className="lg:col-span-3 grid grid-rows-[auto_auto] gap-4">
                            {/* Feature card */}
                            <div className="p-8 sm:p-10 md:p-12 rounded-2xl bg-primary">
                                <h2 className="text-3xl sm:text-4xl mb-5 sm:mb-6 italic text-cream">
                                    Designed for lingering.
                                </h2>

                                <p className="text-cream/75 mb-8 max-w-xl text-sm sm:text-base">
                                    Whether you're finishing a novel or meeting
                                    an old friend, our space offers high-speed
                                    fiber, cozy velvet nooks, and a curated
                                    vinyl soundtrack to help you settle in.
                                </p>

                                {/* Amenities */}
                                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 text-cream">
                                    {FEATURES.map(({ icon: Icon, label }) => (
                                        <li key={label}>
                                            <Icon className="size-6 text-secondary" />

                                            <span className="text-xs uppercase tracking-widest opacity-70">
                                                {label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Supporting lifestyle imagery */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl overflow-hidden">
                                    <img
                                        src={ritualImg}
                                        alt="Barista preparing a pour over coffee"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="rounded-2xl overflow-hidden">
                                    <img
                                        src={craftImg}
                                        alt="Close up of roasted coffee beans"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSnapshot;
