import { useEffect, useState } from "react";

/**
 * useLocalStorage
 *
 * State hook that persists its value in the browser's localStorage.
 *
 * Behaves like useState but automatically loads the initial value from
 * localStorage on mount and writes updates back whenever the state changes.
 *
 * @param {string} key - Storage key used in localStorage.
 * @param {*} initialValue - Fallback value when no stored value exists.
 *
 * @returns {[any, Function]}
 *   - value    — current state value
 *   - setValue — state updater function
 *
 * @example
 * const [cart, setCart] = useLocalStorage("cart", []);
 */
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
