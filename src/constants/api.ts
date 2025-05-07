const API_URL = 'https://api.github.com';

export const API = {
  USERS: `${API_URL}/users`,
  DETAILS: (username: string) => `${API_URL}/users/${username}`,
  SEARCH: `${API_URL}/search/users?q=`,
};
