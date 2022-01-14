/*
    Set current user to local storage
*/
export const setLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

/**
    Get user from local storage
 */
export const getLocalStorage = () => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  return user ? user : null;
};

/*
    Remove user from local storage
*/
export const removeLocalStorage = (user) => {
  localStorage.removeItem("user");
};
