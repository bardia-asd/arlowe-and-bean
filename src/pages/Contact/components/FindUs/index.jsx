import FindUsContent from "./FindUsContent";
import FindUsForm from "./FindUsForm";

const FindUs = () => {
    return (
        <section className="py-10 sm:py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
                <FindUsContent />
                <FindUsForm />
            </div>
        </section>
    );
};

export default FindUs;
