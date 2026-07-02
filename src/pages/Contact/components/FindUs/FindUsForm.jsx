import { useState } from "react";
import InputField from "@/components/common/InputField";
import Textarea from "@/components/common/Textarea";
import Button from "@/components/common/Button";
import useElementOnScreen from "@/hooks/useElementOnScreen";

// Initial state used for both form setup and reset after submission.
const initialFormData = {
    name: "",
    email: "",
    note: "",
};

/**
 * FindUsForm
 *
 * Contact form showcased within the Find Us section.
 * This form is intended for demonstration purposes only and does not
 * persist or send any data to a backend service.
 *
 * Features:
 * - Scroll-triggered reveal animation.
 * - Controlled form inputs.
 * - Generic change handler for updating form state.
 * - Simulated submission experience with form reset.
 *
 * @returns {JSX.Element}
 */
const FindUsForm = () => {
    // Trigger the entrance animation once the component becomes visible.
    const [containerRef, isVisible] = useElementOnScreen(0.5, "0px");

    // Holds the current values of the form fields.
    const [formData, setFormData] = useState(initialFormData);

    /**
     * Updates the matching field in state whenever an input changes.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /**
     * Prevents the default browser submission,
     * resets the form, and displays a demo message.
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData(initialFormData);

        alert("Thanks for your message! This demo form doesn't send data.");
    };

    return (
        <div
            ref={containerRef}
            className={`rounded-2xl bg-bg-card/30 p-8 md:p-10 shadow ${
                isVisible ? "animate-fade-up" : ""
            }`}>
            {/* Section heading */}
            <div>
                <h2 className="text-3xl mb-2">Send a note</h2>

                <p className="text-sm text-espresso/60 mb-6">
                    We answer every message within a day.
                </p>
            </div>

            {/* Demo contact form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <InputField
                    name="name"
                    id="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <InputField
                    name="email"
                    id="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <Textarea
                    name="note"
                    id="note"
                    label="Note"
                    value={formData.note}
                    onChange={handleChange}
                />

                <Button type="submit">Send Message</Button>
            </form>
        </div>
    );
};

export default FindUsForm;
