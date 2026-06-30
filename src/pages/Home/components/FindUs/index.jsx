import FindUsContent from "./FindUsContent";

const FindUs = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-latte/30">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
                    <FindUsContent />
                </div>
            </div>
        </section>
    );
};

export default FindUs;
