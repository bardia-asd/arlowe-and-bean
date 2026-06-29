import PropTypes from "prop-types";
import { forwardRef } from "react";

/**
 * Tailwind class maps — defined at module level so they're created once,
 * not on every render.
 */

/**
 * Visual style variants.
 *
 * solid   — filled primary background; main CTA.
 * outline — transparent with a visible border; secondary actions.
 * ghost   — no background or border; low-emphasis or icon-adjacent actions.
 */
const VARIANT_CLASSES = {
    solid: "bg-primary hover:bg-accent text-text-inverse",
    outline: "border border-border-medium bg-transparent hover:bg-cream",
    ghost: "hover:text-accent",
};

/**
 * Size variants.
 *
 * small — compact padding; suits nav bars and tight layouts.
 * large — generous padding; suits hero sections and standalone CTAs.
 * none  — no padding; useful when the consumer controls spacing (e.g. icon-only buttons).
 */
const SIZE_CLASSES = {
    small: "px-5 lg:px-6 py-2.5",
    large: "px-8 py-4",
    none: "p-0",
};

/**
 * Button
 *
 * A polymorphic, accessible button primitive that covers the project's
 * three visual variants and two common sizes.
 *
 * Polymorphic via the `as` prop: defaults to a `<button>` element but can
 * render as any element or component (e.g. `as={Link}` for a router link
 * that looks like a button). The ref is forwarded to support cases where
 * the parent needs direct DOM access (e.g. focus management).
 *
 * @param {object}         props
 * @param {React.ReactNode}  props.children  - Button label / content.
 * @param {"solid"|"outline"|"ghost"} [props.variant="solid"] - Visual style.
 * @param {"small"|"large"|"none"}   [props.size="large"]    - Padding scale.
 * @param {string}          [props.className=""] - Extra Tailwind classes merged in last,
 *                                                  so they can override defaults if needed.
 * @param {React.ElementType} [props.as="button"]  - Element or component to render as.
 * @param {object}          props.rest       - Any other props forwarded to the element
 *                                             (e.g. onClick, disabled, aria-* attributes).
 * @param {React.Ref}       ref              - Forwarded ref attached to the root element.
 * @returns {JSX.Element}
 */
const Button = forwardRef(
    (
        {
            children,
            variant = "solid",
            size = "large",
            className = "",
            as: Component = "button",
            ...props
        },
        ref,
    ) => {
        /*
         * Class order matters here:
         * 1. Base layout + typography utilities (always applied)
         * 2. Variant classes (colour / border)
         * 3. Size classes (padding)
         * 4. Consumer className last — highest specificity, allows overrides
         */
        return (
            <Component
                ref={ref}
                className={`flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-75 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
                {...props}>
                {children}
            </Component>
        );
    },
);

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
    size: PropTypes.oneOf(["small", "large", "none"]),
    className: PropTypes.string,
    /** Any valid React element type — HTML tag string or a component. */
    as: PropTypes.elementType,
};

/**
 * Explicit display name so the component appears as "Button" in React DevTools
 * rather than "ForwardRef", which is the default for forwardRef-wrapped components.
 */
Button.displayName = "Button";

export default Button;
