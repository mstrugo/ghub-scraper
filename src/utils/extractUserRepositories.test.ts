import { GHUserRepositories } from 'types/github';
import { ParsedRepositories } from 'types/userDetails';
import { extractUserRepositories } from './extractUserRepositories';

describe('extractUserRepositories', () => {
  it('should extract name and url from repositories data', () => {
    const mockData = [
      { name: 'repo1', html_url: 'https://github.com/user/repo1' },
      { name: 'repo2', html_url: 'https://github.com/user/repo2' },
    ] as GHUserRepositories[];

    const expected: ParsedRepositories[] = [
      { name: 'repo1', url: 'https://github.com/user/repo1' },
      { name: 'repo2', url: 'https://github.com/user/repo2' },
    ];

    const result = extractUserRepositories(mockData);
    expect(result).toEqual(expected);
  });

  it('should return an empty array when input is empty', () => {
    const mockData: GHUserRepositories[] = [];
    const expected: ParsedRepositories[] = [];

    const result = extractUserRepositories(mockData);
    expect(result).toEqual(expected);
  });
});
