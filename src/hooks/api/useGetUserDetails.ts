import { API } from 'constants/api';
import type { GHUserDetails, GHUserRepositories } from 'types/github';
import type { GHParsedUserDetails, ParsedRepositories } from 'types/userDetails';
import { extractUserData, extractUserRepositories, fetcherFn } from 'utils';

export const getUserDetails = async (id: string): Promise<GHParsedUserDetails | null> => {
  const res: GHUserDetails = await fetcherFn(API.DETAILS(id));

  if (res) {
    const { repos_url, ...userData } = extractUserData(res);
    let repositories: ParsedRepositories[] = [];

    const repos: GHUserRepositories[] = await fetcherFn(repos_url);
    if (repos.length > 0) {
      repositories = extractUserRepositories(repos);
    }

    return { ...userData, repositories };
  }

  return null;
};
