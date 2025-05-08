import type { ReactElement } from 'react';
import type { GHUserDetails } from './github';

/**
 * Represents a parsed repository with minimal details.
 */
export type ParsedRepositories = {
  /** The name of the repository. */
  name: string;
  /** The URL of the repository. */
  url: string;
};

/**
 * Represents extracted user details from the GitHub API.
 */
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

/**
 * Represents parsed user details with repositories included.
 */
export type GHParsedUserDetails = Omit<ExtractedUserDetails, 'repos_url'> & {
  /** The list of parsed repositories for the user. */
  repositories: ParsedRepositories[];
};

/**
 * Represents user details without repositories or public repository count.
 */
export type UserDetails = Omit<GHParsedUserDetails, 'repositories' | 'public_repos'>;

/**
 * Represents the types of user links (e.g., personal or profile).
 */
export type UserLinks = 'personal' | 'profile';

/**
 * Represents a mapping of user links to their URLs.
 */
export type UserLinksToParse = {
  /** The URL for the personal website. */
  personal: string | null;
  /** The URL for the GitHub profile. */
  profile: string | null;
};

/**
 * Represents a mapping of user links to their icons.
 */
export type UserLinksIcon = {
  /** The icon for the personal website. */
  personal: ReactElement;
  /** The icon for the GitHub profile. */
  profile: ReactElement;
};

/**
 * Represents external links for a user.
 */
export type UserExternalLinks = {
  /** The type of icon for the link. */
  icon: UserLinks;
  /** The title of the link. */
  title: string;
  /** The URL of the link. */
  url: string;
  /** The aria-hidden text for accessibility (optional). */
  ariaHiddenText?: string;
};
