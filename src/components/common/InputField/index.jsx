import PropTypes from "prop-types";
import { useId } from "react";

/**
 * InputField
 *
 * Reusable form input component supporting labels, validation,
 * disabled states, and custom styling.
 *
 * Generates an accessible fallback id using React's `useId`
 * when an explicit id is not provided.
 *
 * @param {Object} props
 * @param {string} [props.type="text"] - Native input type.
 * @param {string} [props.id] - Optional input id.
 * @param {string} props.name - Input name attribute.
 * @param {*} props.value - Controlled input value.
 * @param {Function} props.onChange - Change event handler.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string} [props.label] - Optional label displayed above the input.
 * @param {boolean} [props.isRequired=true] - Whether the field is required.
 * @param {boolean} [props.disabled=false] - Disables user interaction.
 * @param {string} [props.className=""] - Additional utility classes.
 *
 * @returns {JSX.Element}
 */
const InputField = ({
    type = "text",
    id,
    name,
    value,
    onChange,
    placeholder,
    label,
    isRequired = true,
    disabled = false,
    className = "",
}) => {
    // Generate a stable id to associate the label with the input.
    const generatedId = useId();

    // Prefer a provided id, otherwise create one automatically.
    const inputId = id || `input-${generatedId}`;

    return (
        <div className="flex flex-col gap-2">
            {/* Optional field label */}
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-xs uppercase tracking-widest text-espresso/70">
                    {label}
                </label>
            )}

            {/* Controlled input element */}
            <input
                type={type}
                id={inputId}
                name={name}
                value={value}
                onChange={onChange}
                required={isRequired}
                disabled={disabled}
                placeholder={placeholder}
                className={`w-full h-12 px-4 bg-cream rounded-2xl border border-border-light focus:outline-none focus:ring-2 focus:ring-border-dark focus:border-border-dark transition-all duration-100 ${className}`}
            />
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default InputField;
