/**
 * Fetches data from a given URL and returns the JSON response.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} The JSON response or `null` if the response is not OK.
 * @throws {Error} If the fetch operation fails.
 */
export const fetcherFn = async <T>(url: string): Promise<T | null> =>
  await fetch(url)
    .then((res) => {
      if (!res.ok) {
        return null;
      }

      return res.json() as Promise<T>;
    })
    .catch((err) => {
      throw new Error(err);
    });

/**
 * Performs a search operation by appending a query argument to the URL.
 *
 * @param {string} url - The base URL for the search.
 * @param {{ arg: string }} arg - The search argument to append to the URL.
 * @returns {Promise<any>} The JSON response from the search.
 */
export const searchFn = async <T>(url: string, { arg }: { arg: string }): Promise<T | null> =>
  await fetcherFn<T>(`${url}${arg}`);
