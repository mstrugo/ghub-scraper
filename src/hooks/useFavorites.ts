import { useState } from 'react';

export const useFavorites = () => {
  const [favUsers, setFavUsers] = useState<string[]>([]);

  const isFavUser = (userId: string) => favUsers.includes(userId);

  const handleFavUser = (userId: string) => {
    if (isFavUser(userId)) {
      setFavUsers((prev) => prev.filter((fav) => fav !== userId));
    } else {
      setFavUsers((prev) => [...prev, userId]);
    }
  };

  return { handleFavUser, isFavUser };
};
