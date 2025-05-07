import { fetcherFn, searchFn } from './fetcher';

describe('fetcherFn', () => {
  it('should return JSON data when the response is ok', async () => {
    const mockJson = { data: 'test' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockJson),
      } as Response),
    );

    const result = await fetcherFn('https://api.example.com');
    expect(result).toEqual(mockJson);
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com');
  });

  it('should return null when the response is not ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response),
    );

    const result = await fetcherFn('https://api.example.com');
    expect(result).toBeNull();
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com');
  });

  it('should throw an error when fetch fails', async () => {
    const mockError = new Error('Network error');
    global.fetch = jest.fn(() => Promise.reject(mockError));

    await expect(fetcherFn('https://api.example.com')).rejects.toThrow('Network error');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com');
  });
});

describe('searchFn', () => {
  it('should call fetcherFn with the correct URL and argument', async () => {
    const mockJson = { data: 'test' };
    const mockFetcherFn = jest.fn(() => Promise.resolve(mockJson));
    jest.mock('./fetcher', () => ({
      fetcherFn: mockFetcherFn,
    }));
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockJson),
      } as Response),
    );
    const url = 'https://api.example.com/';
    const arg = 'search-query';
    const result = await searchFn(url, { arg });

    expect(result).toEqual(mockJson);
    expect(global.fetch).toHaveBeenCalledWith(`${url}${arg}`);
  });
});
