import { GHUserDetails } from 'types/github';
import type { ExtractedUserDetails } from 'types/userDetails';

/**
 * Extracts relevant user details from the GitHub API response.
 *
 * @param {GHUserDetails} data - The raw user details from the GitHub API.
 * @returns {ExtractedUserDetails} The extracted user details.
 */
export const extractUserData = (data: GHUserDetails): ExtractedUserDetails => {
  const {
    login,
    name,
    avatar_url,
    html_url,
    repos_url,
    location,
    blog,
    followers,
    following,
    public_repos,
    bio,
    created_at,
  } = data;

  return {
    login,
    name,
    html_url,
    avatar_url,
    bio,
    created_at,
    location,
    blog,
    followers,
    following,
    public_repos,
    repos_url,
  };
};
