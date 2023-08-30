/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";
import PropTypes from "prop-types";

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const loggedUsername = sessionStorage.getItem("username");
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const [filteredItems, setFilteredItems] = useState(tweets);
  const [whosProfileToDisplay, setWhosProfileToDisplay] =
    useState(loggedUsername);
  const [tileIsClicked, setTileIsClicked] = useState(false);
  const [userIsLogged, setUserIsLogged] = useState(false);

  const tweetContextValue = {
    tweets,
    setTweets,
    tileIsClicked,
    setTileIsClicked,
    filteredItems,
    setFilteredItems,
    whosProfileToDisplay,
    setWhosProfileToDisplay,
    userIsLogged,
    setUserIsLogged,
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
