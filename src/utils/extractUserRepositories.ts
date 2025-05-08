import { GHUserRepositories } from 'types/github';
import type { ParsedRepositories } from 'types/userDetails';

/**
 * Extracts repository details from the GitHub API response.
 *
 * @param {GHUserRepositories[]} data - The raw repository data from the GitHub API.
 * @returns {ParsedRepositories[]} The parsed repository details.
 */
export const extractUserRepositories = (data: GHUserRepositories[]): ParsedRepositories[] => {
  return data.map(({ name, html_url }) => ({ name, url: html_url }));
};
