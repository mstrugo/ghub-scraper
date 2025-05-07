import type { GHUserDetails } from 'types/github';
import { ExtractedUserDetails } from 'types/userDetails';
import { extractUserData } from './extractUserData';

describe('extractUserData', () => {
  it('should extract user data correctly from GHUserDetails', () => {
    const mockGHUserDetails: GHUserDetails = {
      login: 'testuser',
      id: 12345,
      node_id: 'MDQ6VXNlcjEyMzQ1',
      avatar_url: 'https://example.com/avatar.png',
      gravatar_id: '',
      url: 'https://api.github.com/users/testuser',
      html_url: 'https://github.com/testuser',
      followers_url: 'https://api.github.com/users/testuser/followers',
      following_url: 'https://api.github.com/users/testuser/following{/other_user}',
      gists_url: 'https://api.github.com/users/testuser/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/testuser/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/testuser/subscriptions',
      organizations_url: 'https://api.github.com/users/testuser/orgs',
      repos_url: 'https://api.github.com/users/testuser/repos',
      events_url: 'https://api.github.com/users/testuser/events{/privacy}',
      received_events_url: 'https://api.github.com/users/testuser/received_events',
      type: 'User',
      site_admin: false,
      name: 'Test User',
      company: null,
      blog: 'https://testuser.blog',
      location: 'Test Location',
      email: null,
      hireable: null,
      bio: 'This is a test bio',
      twitter_username: null,
      public_repos: 20,
      public_gists: 0,
      followers: 10,
      following: 5,
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2023-01-02T00:00:00Z',
      user_view_type: 'User',
    };

    const expectedExtractedUserDetails: ExtractedUserDetails = {
      login: 'testuser',
      name: 'Test User',
      avatar_url: 'https://example.com/avatar.png',
      html_url: 'https://github.com/testuser',
      repos_url: 'https://api.github.com/users/testuser/repos',
      location: 'Test Location',
      blog: 'https://testuser.blog',
      followers: 10,
      following: 5,
      public_repos: 20,
      bio: 'This is a test bio',
      created_at: '2023-01-01T00:00:00Z',
    };

    const result = extractUserData(mockGHUserDetails);
    expect(result).toEqual(expectedExtractedUserDetails);
  });

  it('should handle missing optional fields gracefully', () => {
    const mockGHUserDetails: GHUserDetails = {
      login: 'testuser',
      name: null,
      avatar_url: 'https://example.com/avatar.png',
      html_url: 'https://github.com/testuser',
      repos_url: 'https://api.github.com/users/testuser/repos',
      location: null,
      blog: null,
      followers: 0,
      following: 0,
      public_repos: 0,
      bio: null,
      created_at: '2023-01-01T00:00:00Z',
      id: 123,
      company: null,
      email: null,
      hireable: null,
      twitter_username: null,
      gravatar_id: '',
      url: 'https://api.github.com/users/testuser',
      followers_url: 'https://api.github.com/users/testuser/followers',
      following_url: 'https://api.github.com/users/testuser/following{/other_user}',
      gists_url: 'https://api.github.com/users/testuser/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/testuser/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/testuser/subscriptions',
      organizations_url: 'https://api.github.com/users/testuser/orgs',
      events_url: 'https://api.github.com/users/testuser/events{/privacy}',
      received_events_url: 'https://api.github.com/users/testuser/received_events',
      type: 'User',
      site_admin: false,
      node_id: 'MDQ6VXNlcjEyMw==',
      public_gists: 0,
      updated_at: '2023-01-02T00:00:00Z',
      user_view_type: 'User',
      score: 1,
    };

    const expectedExtractedUserDetails: ExtractedUserDetails = {
      login: 'testuser',
      name: null,
      avatar_url: 'https://example.com/avatar.png',
      html_url: 'https://github.com/testuser',
      repos_url: 'https://api.github.com/users/testuser/repos',
      location: null,
      blog: null,
      followers: 0,
      following: 0,
      public_repos: 0,
      bio: null,
      created_at: '2023-01-01T00:00:00Z',
    };

    const result = extractUserData(mockGHUserDetails);
    expect(result).toEqual(expectedExtractedUserDetails);
  });
});
