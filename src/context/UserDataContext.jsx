import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import AccountService from "../services/AccountService";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const { getUsername } = AccountService();
  const userLogged = getUsername();
  const [profileToDisplay, setProfileToDisplay] = useState(userLogged);

  const userDataContextValue = useMemo(
    () => ({
      userLogged,
      profileToDisplay,
      setProfileToDisplay,
    }),
    [userLogged, profileToDisplay, setProfileToDisplay]
  );

  return (
    <UserDataContext.Provider value={userDataContextValue}>
      {children}
    </UserDataContext.Provider>
  );
};

UserDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserDataContext, UserDataProvider };
