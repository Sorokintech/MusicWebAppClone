export const logOut = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    location.reload();
}