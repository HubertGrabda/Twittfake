/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";
import PropTypes from "prop-types";
import getUsername from "../functions/getUsername";

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const userLogged = getUsername();
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const [filteredItems, setFilteredItems] = useState(tweets);
  const [whosProfileToDisplay, setWhosProfileToDisplay] =
    useState(userLogged);
  const [tileIsClicked, setTileIsClicked] = useState(false);
  const [userIsLogged, setUserIsLogged] = useState(false);

  const tweetContextValue = {
    userLogged,
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
