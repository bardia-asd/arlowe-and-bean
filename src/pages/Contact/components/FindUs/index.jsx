import FindUsContent from "./FindUsContent";
import FindUsForm from "./FindUsForm";

const FindUs = () => {
    return (
        <section className="px-4 sm:px-6 py-10 sm:py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
                    <FindUsContent />
                    <FindUsForm />
                </div>
            </div>
        </section>
    );
};

export default FindUs;
