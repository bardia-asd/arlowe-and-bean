import PropTypes from "prop-types";
import { useId } from "react";

/**
 * Textarea
 *
 * Reusable textarea component supporting labels, validation,
 * disabled states, and custom styling.
 *
 * Generates an accessible fallback id using React's `useId`
 * when an explicit id is not provided.
 *
 * @param {Object} props
 * @param {string} [props.id] - Optional textarea id.
 * @param {string} props.name - Textarea name attribute.
 * @param {string|number} props.value - Controlled textarea value.
 * @param {Function} props.onChange - Change event handler.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string} [props.label] - Optional label displayed above the textarea.
 * @param {boolean} [props.isRequired=true] - Whether the field is required.
 * @param {boolean} [props.disabled=false] - Disables user interaction.
 * @param {string} [props.className=""] - Additional utility classes.
 *
 * @returns {JSX.Element}
 */
const Textarea = ({
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
    // Generate a stable id for accessibility when one isn't supplied.
    const generatedId = useId();

    // Prefer a provided id, otherwise create one automatically.
    const textareaId = id || `textarea-${generatedId}`;

    return (
        <div className="flex flex-col gap-2">
            {/* Optional field label */}
            {label && (
                <label
                    htmlFor={textareaId}
                    className="block text-xs uppercase tracking-widest text-espresso/70">
                    {label}
                </label>
            )}

            {/* Controlled textarea element */}
            <textarea
                id={textareaId}
                rows={5}
                name={name}
                value={value}
                onChange={onChange}
                required={isRequired}
                disabled={disabled}
                placeholder={placeholder}
                className={`w-full py-1 px-4 bg-cream rounded-2xl border border-border-light focus:outline-none focus:ring-2 focus:ring-border-dark focus:border-border-dark transition-all duration-100 resize-none scrollbar-thumb-border-medium scrollbar-thin ${className}`}
            />
        </div>
    );
};

Textarea.propTypes = {
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

export default Textarea;
