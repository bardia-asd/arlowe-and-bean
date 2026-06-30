import { Link } from "react-router";
import useElementOnScreen from "@/hooks/useElementOnScreen";
import Button from "@/components/common/Button";

/**
 * FindUsContent
 *
 * Contact section presenting the cafe's location, opening hours,
 * and a call-to-action directing visitors to navigation services.
 *
 * The section fades into view once when it enters the viewport,
 * providing a subtle scroll-based reveal effect.
 *
 * @returns {JSX.Element}
 */
const FindUsContent = () => {
    // Trigger the entrance animation the first time the section becomes visible.
    const [containerRef, isVisible] = useElementOnScreen(0.5, "0px");

    return (
        <div ref={containerRef} className={isVisible ? "animate-fade-up" : ""}>
            <h2 className="text-3xl sm:text-4xl mb-6 sm:mb-8">
                Find Us in the Village
            </h2>

            {/* Contact details */}
            <div className="space-y-6">
                {/* Address */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-caramel font-bold mb-2">
                        Address
                    </h4>

                    <p className="text-base sm:text-lg">
                        124 Heirloom Lane, East Bloom, London EC2A
                    </p>
                </div>

                {/* Opening hours */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-caramel font-bold mb-2">
                        Hours
                    </h4>

                    <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1.5 max-w-xs text-sm">
                        <span className="text-espresso/70">Mon – Fri</span>
                        <span>07:00 – 18:00</span>

                        <span className="text-espresso/70">Saturday</span>
                        <span>08:00 – 19:00</span>

                        <span className="text-espresso/70">Sunday</span>
                        <span>09:00 – 17:00</span>
                    </div>
                </div>

                {/* External navigation CTA */}
                <Button
                    to="visit"
                    variant="outline"
                    as={Link}
                    className="w-fit">
                    Get Directions
                </Button>
            </div>
        </div>
    );
};

export default FindUsContent;
