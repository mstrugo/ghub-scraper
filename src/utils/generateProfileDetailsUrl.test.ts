import { generateProfileDetailsUrl } from './generateProfileDetailsUrl';

describe('generateProfileDetailsUrl', () => {
  it('should generate the correct URL for a given profile ID', () => {
    const profileId = '12345';
    const expectedUrl = 'details/12345';
    const result = generateProfileDetailsUrl(profileId);
    expect(result).toBe(expectedUrl);
  });

  it('should handle an empty profile ID', () => {
    const profileId = '';
    const expectedUrl = 'details/';
    const result = generateProfileDetailsUrl(profileId);
    expect(result).toBe(expectedUrl);
  });

  it('should handle special characters in the profile ID', () => {
    const profileId = 'abc@123!';
    const expectedUrl = 'details/abc@123!';
    const result = generateProfileDetailsUrl(profileId);
    expect(result).toBe(expectedUrl);
  });
});
