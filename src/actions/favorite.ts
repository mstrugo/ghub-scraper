'use server';

const favorites: string[] = [];

/**
 * Checks if a user is in the favorites list.
 *
 * @param {string} userId - The ID of the user to check.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user is in the favorites list, otherwise `false`.
 */
export const isFavUser = async (userId: string): Promise<boolean> => favorites.includes(userId);

/**
 * Toggles the favorite status of a user.
 *
 * - If the user is already in the favorites list, they will be removed.
 * - If the user is not in the favorites list, they will be added.
 *
 * @param {string} userId - The ID of the user to toggle.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user was added to the favorites list, or `false` if they were removed.
 */
export const handleFavUser = async (userId: string): Promise<boolean> => {
  const isFavorite = await isFavUser(userId);
  if (isFavorite) {
    favorites.splice(favorites.indexOf(userId), 1);
  } else {
    favorites.push(userId);
  }

  return !isFavorite;
};
