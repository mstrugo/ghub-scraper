'use server';

const favorites: string[] = [];

export const isFavUser = async (userId: string) => favorites.includes(userId);

export const handleFavUser = async (userId: string) => {
  const isFavorite = await isFavUser(userId);
  if (isFavorite) {
    favorites.splice(favorites.indexOf(userId), 1);
  } else {
    favorites.push(userId);
  }

  return !isFavorite;
};
