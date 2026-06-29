import { Link } from "react-router";

const HeroContent = () => {
    return (
        <div className="animate-fade-up">
            <span className="text-caramel text-xs sm:text-sm uppercase tracking-widest font-medium mb-4">
                Est. 2014 · London
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 sm:mb-8">
                The Quiet Art of the
                <span className="italic">Perfect Pour.</span>
            </h1>
            <p className="sm:text-lg max-w-md text-espresso/70 mb-8 sm:mb-10">
                A sanctuary for the senses. We pair ethically sourced micro-lots
                with artisanal pastries, served in a space designed for slow
                mornings and focused afternoons.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <Link
                    to="menu"
                    className="flex items-center justify-center px-8 py-4 bg-primary hover:bg-accent rounded-full text-text-inverse text-sm font-medium transition-colors duration-75">
                    View Today's Menu
                </Link>
                <Link
                    to="about-us"
                    className="flex items-center justify-center px-8 py-4 border border-border-medium bg-transparent hover:bg-cream rounded-full text-sm font-medium transition-colors duration-75">
                    Explore the Space
                </Link>
            </div>
        </div>
    );
};

export default HeroContent;
