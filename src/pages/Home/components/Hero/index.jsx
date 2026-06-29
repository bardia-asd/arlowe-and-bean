import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroSection = () => {
    return (
        <section className="px-4 sm:px-6 py-10 sm:py-16 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
};

export default HeroSection;
