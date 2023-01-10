import getCookie from './get-cookie';

export const checkFavoriteTrack = (arr) => {
  const cookieUsername = getCookie('username');

 return !!arr?.find(({ username }) => username === cookieUsername);
};