const getUsername = () => {
  const userLogged = sessionStorage.getItem("username");
  return userLogged;
};

export default getUsername;
