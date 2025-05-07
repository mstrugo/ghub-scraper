import { GHUserDetails } from 'types/github';
import type { ExtractedUserDetails } from 'types/userDetails';

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
