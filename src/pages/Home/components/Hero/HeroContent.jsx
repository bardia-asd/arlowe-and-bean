import { Link } from "react-router";
import Button from "@/components/common/Button";
import PageHeader from "@/components/common/PageHeader";

const HeroContent = () => {
    
    return (
        <div className="animate-fade-up">
            <PageHeader
                title="The Quiet Art of the"
                italic="Perfect Pour."
                subtitle="Est. 2014 · London"
                description="A sanctuary for the senses. We pair ethically sourced micro-lots with artisanal pastries, served in a space designed for slow mornings and focused afternoons"
                className="mb-8 sm:mb-10 max-w-xl"
            />
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
