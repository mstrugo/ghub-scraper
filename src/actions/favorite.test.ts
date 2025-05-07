import { handleFavUser, isFavUser } from './favorite';

describe('favorite actions', () => {
  test('isFavUser should return false for a user not in favorites', async () => {
    const userId = 'user1';
    const result = await isFavUser(userId);
    expect(result).toBe(false);
  });

  test('isFavUser should return true for a user in favorites', async () => {
    const userId = 'user1';
    await handleFavUser(userId);
    const result = await isFavUser(userId);
    expect(result).toBe(true);
  });

  test('handleFavUser should add a user to favorites if not already present', async () => {
    const userId = 'user2';
    const result = await handleFavUser(userId);
    expect(result).toBe(true);
  });

  test('handleFavUser should remove a user from favorites if already present', async () => {
    const userId = 'user3';
    await handleFavUser(userId);

    const result = await handleFavUser(userId);
    expect(result).toBe(false);
  });
});
