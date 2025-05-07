import { API } from './api';

describe('API constants', () => {
  const API_URL = 'https://api.github.com';

  it('should have the correct USERS endpoint', () => {
    expect(API.USERS).toBe(`${API_URL}/users`);
  });

  it('should generate the correct DETAILS endpoint for a given username', () => {
    const username = 'testuser';
    expect(API.DETAILS(username)).toBe(`${API_URL}/users/${username}`);
  });

  it('should have the correct SEARCH endpoint', () => {
    expect(API.SEARCH).toBe(`${API_URL}/search/users?q=`);
  });
});
