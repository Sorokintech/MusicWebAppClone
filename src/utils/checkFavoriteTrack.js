import getCookie from './get-cookie';

export const checkFavoriteTrack = (arr) => {
  const cookieUsername = getCookie('username');
  let isFavorite = false;

  arr?.forEach(({ username }) => {
    if (username === cookieUsername) {
      isFavorite = true;
    }
  });
  return isFavorite;
};