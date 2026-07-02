import PageHeader from "@/components/common/PageHeader";
import CafeMap from "@/components/common/CafeMap";
import FindUs from "./components/FindUs";

/**
 * Contact
 *
 * Contact and visit page for Arlowe & Bean.
 *
 * Provides visitors with:
 * - An introductory page header.
 * - An interactive map displaying the cafe location.
 * - Contact information and a demo inquiry form.
 *
 * @returns {JSX.Element}
 */
const Contact = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6">
            {/* Page introduction */}
            <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 md:pt-24 md:pb-16">
                <PageHeader
                    subtitle="Visit"
                    title="Find us in "
                    italic="East Bloom."
                    description="Pop by for a cup, or send us a note. We answer every message personally."
                    className="mx-auto text-center"
                />
            </section>

            {/* Interactive cafe location map */}
            <section className="pb-10 sm:pb-12">
                <CafeMap />
            </section>

            {/* Contact details and message form */}
            <FindUs />
        </div>
    );
};

export default Contact;
