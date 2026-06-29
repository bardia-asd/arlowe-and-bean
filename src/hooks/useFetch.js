import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

/**
 * useFetch
 *
 * Generic data-fetching hook that retrieves all rows from a given Supabase
 * table and exposes the result alongside loading and error states.
 *
 * Re-fetches automatically if `table` changes, making it safe to use in
 * components that switch between tables dynamically.
 *
 * @param {string} table - The Supabase table name to query (e.g. "menu_items").
 * @returns {{ data: Array, loading: boolean, error: Error|null }}
 *   - data    — the fetched rows; empty array until the request resolves.
 *   - loading — true while the request is in flight.
 *   - error   — the caught error object if the request failed, otherwise null.
 *
 * @example
 * const { data, loading, error } = useFetch("categories");
 */
const useFetch = (table) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                /*
                 * Supabase returns a `{ data, error }` shape rather than
                 * throwing on failure, so we alias `data` to `result` to
                 * avoid shadowing the outer `data` state variable,
                 * and manually throw if an error is present.
                 */
                let { data: result, error } = await supabase
                    .from(table)
                    .select("*");

                if (error) throw error;

                setData(result);
                setError(null); // Clear any error from a previous failed attempt
            } catch (err) {
                setError(err);
            } finally {
                // Runs whether the request succeeded or failed
                setLoading(false);
            }
        };

        fetchData();
    }, [table]); // Re-fetch whenever the target table changes

    return { data, loading, error };
};

export default useFetch;
