import { useEffect, useRef, useState } from "react";

/**
 * useElementOnScreen
 *
 * Custom hook that tracks whether a DOM element has entered the viewport
 * using the native IntersectionObserver API. Attach the returned ref to any
 * element to receive a reactive `isVisible` boolean.
 *
 * Fires once: as soon as the element crosses the threshold, `isVisible` is
 * set to true and the observer disconnects immediately. It will never flip
 * back to false, even if the element later scrolls out of view. This makes
 * the hook suited to one-shot scroll-reveal animations (e.g. animate-fade-up)
 * that shouldn't re-trigger on every scroll in/out.
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
 *   - isVisible    — false until the element first intersects, then permanently true
 *
 * @example
 * const [ref, isVisible] = useElementOnScreen(0.2, "0px");
 * <div ref={ref} className={isVisible ? "animate-fade-up" : "opacity-0"} />
 */
const useElementOnScreen = (threshold, rootMargin) => {
    // Holds a reference to the DOM element being observed.
    const containerRef = useRef(null);

    // Once true, stays true — see "Fires once" note above.
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Disconnect immediately after the first trigger — no further
                    // intersection events are needed once isVisible is locked in.
                    observer.disconnect();
                }
            },
            {
                root: null, // null = observe relative to the viewport
                rootMargin, // expand/shrink the effective viewport boundary
                threshold, // fraction of element that must be visible to trigger
            },
        );

        // Begin observing once the ref is attached to a DOM node.
        if (containerRef.current) observer.observe(containerRef.current);

        /*
         * Cleanup: disconnect the observer when the component unmounts or
         * when threshold / rootMargin change and the effect re-runs.
         * Safe to call even if the observer already self-disconnected above.
         */
        return () => {
            observer.disconnect();
        };
    }, [rootMargin, threshold]); // Re-initialise the observer if options change

    return [containerRef, isVisible];
};

export default useElementOnScreen;
