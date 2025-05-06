const API_URL = 'https://api.github.com';

export const API = {
  USERS: { KEY: 'users', ENDPOINT: `${API_URL}/users` },
  DETAILS: { KEY: 'user-details', ENDPOINT: (username: string) => `${API_URL}/users/${username}` },
  SEARCH: { KEY: 'search', ENDPOINT: `${API_URL}/search/users?q=` },
};
