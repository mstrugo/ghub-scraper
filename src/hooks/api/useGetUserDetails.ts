import { API } from 'constants/api';
import type { GHUserDetails, GHUserRepositories } from 'types/github';
import type { GHParsedUserDetails, ParsedRepositories } from 'types/userDetails';
import { extractUserData } from 'utils/extractUserData';
import { extractUserRepositories } from 'utils/extractUserRepositories';
import { fetcherFn } from 'utils/fetcher';

/**
 * Fetches and parses user details along with their repositories from the GitHub API.
 *
 * @param id - The unique identifier of the user whose details are to be fetched.
 * @returns A promise that resolves to an object containing parsed user details and their repositories,
 *          or `null` if the user details could not be fetched.
 *
 * @remarks
 * - The function uses `fetcherFn` to make API calls.
 * - The `API.DETAILS` function is used to construct the endpoint for fetching user details.
 * - The `extractUserData` function is used to parse the user data from the API response.
 * - The `extractUserRepositories` function is used to parse the user's repositories.
 *
 * @throws This function may throw an error if the API call fails or if the response is invalid.
 */
export const getUserDetails = async (id: string): Promise<GHParsedUserDetails | null> => {
  const res = await fetcherFn<GHUserDetails | null>(API.DETAILS(id));

  if (res) {
    const { repos_url, ...userData } = extractUserData(res);
    let repositories: ParsedRepositories[] = [];

    const repos = await fetcherFn<GHUserRepositories[] | null>(repos_url);
    if (repos && repos.length > 0) {
      repositories = extractUserRepositories(repos);
    }

    return { ...userData, repositories };
  }

  return null;
};
