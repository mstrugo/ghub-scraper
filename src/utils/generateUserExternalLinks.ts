import type { UserExternalLinks, UserLinks, UserLinksToParse } from 'types/userDetails';

const LINK_CONFIG = {
  profile: (url: string): UserExternalLinks => ({
    ariaHiddenText: undefined,
    icon: 'profile',
    title: 'View complete profile in GitHub',
    url,
  }),
  personal: (url: string): UserExternalLinks => ({
    ariaHiddenText: undefined,
    icon: 'personal',
    title: 'View personal Website',
    url,
  }),
};

export const generateUserExternalLinks = (urls: UserLinksToParse): UserExternalLinks[] => {
  const keys = Object.keys(urls) as UserLinks[];

  return keys.filter((key) => urls[key]).map((key) => LINK_CONFIG[key](urls[key] as string));
};
