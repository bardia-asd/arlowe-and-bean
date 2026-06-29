import PropTypes from "prop-types";

/**
 * PageHeader
 *
 * Reusable hero-style heading block used at the top of each page.
 * Renders a three-level typographic hierarchy:
 *
 *   subtitle    — small all-caps eyebrow label (e.g. "Our Menu")
 *   title       — large display heading, optionally followed by an italic flourish
 *   description — optional supporting body copy
 *
 * The `italic` prop appends a styled italic span directly inside the <h1>
 * so the two parts flow as a single heading rather than separate elements.
 * Example: title="Fresh from the" italic="roaster" → "Fresh from the roaster"
 *
 * @param {object} props
 * @param {string}  props.title       - Main heading text (plain portion).
 * @param {string}  props.subtitle    - Eyebrow label rendered above the heading.
 * @param {string}  props.italic      - Italic suffix appended inside the <h1>.
 * @param {string} [props.description]- Optional supporting paragraph.
 * @param {string} [props.className=""]- Extra classes applied to the wrapper,
 *                                       allowing per-page spacing/layout overrides.
 * @returns {JSX.Element}
 */
const PageHeader = ({
    title,
    subtitle,
    description,
    italic,
    className = "",
}) => {
    return (
        <div className={`${className}`}>
            {/* Eyebrow label — sits above the heading to provide page context */}
            <span className="text-caramel text-xs sm:text-sm uppercase tracking-widest font-medium mb-4">
                {subtitle}
            </span>

            {/*
             * Display heading — fluid type scale from 4xl → 7xl across breakpoints.
             * leading-[1.05] tightens line-height for large display sizes where
             * the default leading would add too much space between wrapped lines.
             */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 sm:mb-8">
                {title}
                {/* Italic flourish flows inline with the heading text */}
                <span className="italic">{italic}</span>
            </h1>

            {/* Supporting copy — only rendered when a description is provided */}
            {description && (
                <p className="sm:text-lg text-espresso/70">{description}</p>
            )}
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    /** Italic suffix appended inside the <h1> — required to complete the heading. */
    italic: PropTypes.string.isRequired,
    description: PropTypes.string,
    className: PropTypes.string,
};

export default PageHeader;
