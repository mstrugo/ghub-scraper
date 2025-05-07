import type { UserExternalLinks, UserLinksToParse } from 'types/userDetails';
import { generateUserExternalLinks } from './generateUserExternalLinks';

describe('generateUserExternalLinks', () => {
  it('should generate external links for valid URLs', () => {
    const input: UserLinksToParse = {
      profile: 'https://github.com/user',
      personal: 'https://userwebsite.com',
    };

    const expected: UserExternalLinks[] = [
      {
        ariaHiddenText: undefined,
        icon: 'profile',
        title: 'View complete profile in GitHub',
        url: 'https://github.com/user',
      },
      {
        ariaHiddenText: undefined,
        icon: 'personal',
        title: 'View personal Website',
        url: 'https://userwebsite.com',
      },
    ];

    expect(generateUserExternalLinks(input)).toEqual(expected);
  });

  it('should skip keys with undefined or null URLs', () => {
    const input: UserLinksToParse = {
      profile: 'https://github.com/user',
      personal: null,
    };

    const expected: UserExternalLinks[] = [
      {
        ariaHiddenText: undefined,
        icon: 'profile',
        title: 'View complete profile in GitHub',
        url: 'https://github.com/user',
      },
    ];

    expect(generateUserExternalLinks(input)).toEqual(expected);
  });

  it('should return an empty array if no valid URLs are provided', () => {
    const input: UserLinksToParse = {
      profile: null,
      personal: undefined,
    };

    expect(generateUserExternalLinks(input)).toEqual([]);
  });

  it('should handle an empty input object', () => {
    const input: UserLinksToParse = {};

    expect(generateUserExternalLinks(input)).toEqual([]);
  });
});
