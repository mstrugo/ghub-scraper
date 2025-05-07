import type { ReactElement } from 'react';
import type { GHUserDetails } from './github';

export type ParsedRepositories = {
  name: string;
  url: string;
};

export type ExtractedUserDetails = Pick<
  GHUserDetails,
  | 'login'
  | 'name'
  | 'avatar_url'
  | 'html_url'
  | 'location'
  | 'bio'
  | 'created_at'
  | 'blog'
  | 'followers'
  | 'following'
  | 'public_repos'
  | 'repos_url'
>;

export type GHParsedUserDetails = Omit<ExtractedUserDetails, 'repos_url'> & {
  repositories: ParsedRepositories[];
};

export type UserDetails = Omit<GHParsedUserDetails, 'repositories' | 'public_repos'>;

export type UserLinks = 'personal' | 'profile';

export type UserLinksToParse = {
  [key in UserLinks]: string | null;
};
export type UserLinksIcon = {
  [key in UserLinks]: ReactElement;
};

export type UserExternalLinks = {
  icon: UserLinks;
  title: string;
  url: string;
  ariaHiddenText?: string;
};
