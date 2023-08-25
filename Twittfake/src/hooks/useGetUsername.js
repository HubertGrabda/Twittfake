import { useEffect, useState } from "react";

const useGetUsername = () => {
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    setUserLogged(username);
  }, []);

  return userLogged;
};

export default useGetUsername;
