import PageHeader from "@/components/common/PageHeader";

const SectionHeader = () => {
    return (
        <section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12 md:pt-24 md:pb-16">
            <PageHeader
                subtitle="Today's Selection"
                title="A short list, "
                italic="made well."
                description="We change our menu with the seasons and the beans we source. Every item is made from scratch each morning."
                className="container mx-auto text-center max-w-3xl"
            />
        </section>
    );
};

export default SectionHeader;
