import { Link } from "react-router";
import PageHeader from "@/components/common/PageHeader";
import Button from "@/components/common/Button";
import interiorImg from "@/assets/interior.jpg";
import ritualImg from "@/assets/ritual.jpg";
import craftImg from "@/assets/craft.jpg";
import heroImg from "@/assets/hero.jpg";

/**
 * AboutUs
 *
 * Brand storytelling page introducing the origins, values,
 * and philosophy behind Arlowe & Bean.
 *
 * Structure:
 * - Introductory hero heading.
 * - Large feature image.
 * - Narrative section describing the cafe's history.
 * - Editorial image gallery.
 * - Core principles and sourcing philosophy.
 * - Closing call-to-action encouraging visitors to stop by.
 *
 * @returns {JSX.Element}
 */
const AboutUs = () => {
    return (
        <>
            {/* Hero heading */}
            <section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12 md:pt-24 md:pb-20">
                <PageHeader
                    title="A cafe built for "
                    italic="a slower morning."
                    subtitle="Our Story"
                    className="container text-center max-w-3xl mx-auto"
                />
            </section>
            {/* Featured interior photograph */}
            <section className="px-4 sm:px-6 pb-16 sm:pb-20">
                <div className="container max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-video">
                    <img
                        src={interiorImg}
                        alt="Inside Arlowe & Bean"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* Brand story */}
            <section className="px-4 sm:px-6 py-10 sm:py-16 md:py-20">
                <div className="container max-w-3xl mx-auto space-y-8 sm:space-y-10 text-base sm:text-lg leading-relaxed text-espresso/70">
                    <p>
                        Arlowe & Bean started as a small Sunday-only roastery in
                        a converted East Bloom flower shop. What began with one
                        drum roaster and a stack of borrowed ceramic cups has,
                        ten years on, grown into a daily refuge for the
                        neighbourhood.
                    </p>
                    <p>
                        Our philosophy hasn't shifted. We source single-origin
                        micro-lots from farmers we've come to know by name. We
                        bake our pastries each morning from heirloom flours. And
                        we resist the urge to fill the space with anything that
                        doesn't earn its place.
                    </p>
                    <p className="font-heading italic text-xl sm:text-2xl text-caramel">
                        <q>
                            We want you to slow down, settle in, and remember
                            what unhurried tastes like
                        </q>
                    </p>
                </div>
            </section>
            {/* Editorial imagery */}
            <section className="px-4 sm:px-6 py-10 sm:py-12">
                <div className="container max-w-7xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="rounded-2xl overflow-hidden aspect-4/5">
                        <img
                            src={heroImg}
                            alt="A morning latte"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-4/5">
                        <img
                            src={craftImg}
                            alt="Roasted coffee beans"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Values and sourcing principles */}
            <section className="px-4 sm:px-6 py-16 sm:py-20 bg-latte/40 mt-10 sm:mt-12">
                <div className="container max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
                    <div>
                        <div className="h-px w-12 bg-caramel mb-5 sm:mb-6"></div>
                        <h3 className="text-2xl mb-3">Sourced Honestly</h3>
                        <p className="text-espresso/70 leading-relaxed">
                            Direct-trade partnerships with farms in Ethiopia,
                            Colombia, and Guatemala.
                        </p>
                    </div>
                    <div>
                        <div className="h-px w-12 bg-caramel mb-5 sm:mb-6"></div>
                        <h3 className="text-2xl mb-3">Sourced Honestly</h3>
                        <p className="text-espresso/70 leading-relaxed">
                            Direct-trade partnerships with farms in Ethiopia,
                            Colombia, and Guatemala.
                        </p>
                    </div>
                    <div>
                        <div className="h-px w-12 bg-caramel mb-5 sm:mb-6"></div>
                        <h3 className="text-2xl mb-3">Sourced Honestly</h3>
                        <p className="text-espresso/70 leading-relaxed">
                            Direct-trade partnerships with farms in Ethiopia,
                            Colombia, and Guatemala.
                        </p>
                    </div>
                </div>
            </section>
            {/* Closing image and CTA */}
            <section className="px-4 sm:px-6 py-16 sm:py-20">
                <div className="container max-w-3xl mx-auto">
                    <div className="rounded-2xl overflow-hidden aspect-video mb-10 sm:mb-12">
                        <img
                            src={ritualImg}
                            alt="Pour-over ritual"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <Button to="/visit" as={Link} className="w-fit mx-auto">
                        Come Visit Us
                    </Button>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
