const getUsername = () => {
  const userLogged = sessionStorage.getItem("username");
  if (userLogged) {
    return userLogged;
  } else {
    return false;
  }
};

export default getUsername;
