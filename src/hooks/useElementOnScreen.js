import { useEffect, useRef, useState } from "react";

/**
 * useElementOnScreen
 *
 * Custom hook that tracks whether a DOM element is visible within the viewport
 * using the native IntersectionObserver API. Attach the returned ref to any
 * element to receive a reactive `isVisible` boolean that updates as the element
 * enters and leaves the viewport.
 *
 * Typical use case: triggering CSS animations or deferring data fetching until
 * an element scrolls into view.
 *
 * @param {number} threshold  - Fraction of the element that must be visible
 *                              before `isVisible` becomes true (0–1).
 *                              e.g. 0 = any pixel visible, 1 = fully visible.
 * @param {string} rootMargin - Margin around the viewport used to expand or
 *                              shrink the intersection area, in CSS shorthand.
 *                              e.g. "0px" or "0px 0px -100px 0px" to trigger
 *                              slightly before the element reaches the edge.
 * @returns {[React.RefObject, boolean]} Tuple of:
 *   - containerRef — attach to the element you want to observe via `ref={containerRef}`
 *   - isVisible    — true when the element meets the threshold, false otherwise
 *
 * @example
 * const [ref, isVisible] = useElementOnScreen(0.2, "0px");
 * <div ref={ref} className={isVisible ? "animate-fade-up" : "opacity-0"} />
 */
const useElementOnScreen = (threshold, rootMargin) => {
    // Holds a reference to the DOM element being observed.
    const containerRef = useRef(null);

    // Reflects whether the observed element currently meets the intersection threshold.
    const [isVisible, setIsVisible] = useState(false);

    /**
     * IntersectionObserver callback.
     * Destructures the first (and only) entry since we observe a single element.
     * `isIntersecting` is true when the element crosses the threshold into view.
     */
    const callbackFn = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFn, {
            root: null, // null = observe relative to the viewport
            rootMargin, // expand/shrink the effective viewport boundary
            threshold, // fraction of element that must be visible to trigger
        });

        // Begin observing once the ref is attached to a DOM node.
        if (containerRef.current) observer.observe(containerRef.current);

        /*
         * Cleanup: stop observing when the component unmounts or when
         * threshold / rootMargin change and the effect re-runs.
         * Guards against the ref being null at teardown time.
         */
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [rootMargin, threshold]); // Re-initialise the observer if options change

    return [containerRef, isVisible];
};

export default useElementOnScreen;
