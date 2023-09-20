/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";
import PropTypes from "prop-types";
import AccountService from "../services/AccountService";

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const { getUsername } = AccountService();
  const userLogged = getUsername();
  const userLoggedInitialState = sessionStorage.getItem("username");
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const [filteredTweetsData, setFilteredTweetsData] = useState(tweets);
  const [profileToDisplay, setProfileToDisplay] = useState(
    userLoggedInitialState
  );
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(userLoggedInitialState);

  const tweetContextValue = {
    userLogged,
    tweets,
    setTweets,
    isTagClicked,
    setIsTagClicked,
    filteredTweetsData,
    setFilteredTweetsData,
    profileToDisplay,
    setProfileToDisplay,
    isUserLogged,
    setIsUserLogged,
  };

  return (
    <TweetsContext.Provider value={tweetContextValue}>
      {children}
    </TweetsContext.Provider>
  );
};

TweetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TweetsContext, TweetsProvider };
