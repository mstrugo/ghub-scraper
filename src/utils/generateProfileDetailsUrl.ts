/**
 * Generates a URL for the profile details page of a user.
 *
 * @param {string} profileId - The ID of the user profile.
 * @returns {string} The generated profile details URL.
 */
export const generateProfileDetailsUrl = (profileId: string) => {
  return `details/${profileId}`;
};
