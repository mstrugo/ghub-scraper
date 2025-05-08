const API_URL = 'https://api.github.com';

/**
 * API endpoints for interacting with the GitHub API.
 */
export const API = {
  /**
   * Endpoint to fetch the list of GitHub users.
   * @type {string}
   */
  USERS: `${API_URL}/users`,

  /**
   * Generates the endpoint to fetch details of a specific GitHub user.
   *
   * @param {string} username - The username of the GitHub user.
   * @returns {string} The endpoint URL for fetching user details.
   */
  DETAILS: (username: string) => `${API_URL}/users/${username}`,

  /**
   * Endpoint to search for GitHub users.
   * @type {string}
   */
  SEARCH: `${API_URL}/search/users?q=`,
};
