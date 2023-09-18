/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";
import PropTypes from "prop-types";
import { getUsername } from "../shared";

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const userLogged = getUsername();
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const [filteredTweetsData, setFilteredTweetsData] = useState(tweets);
  const [profileToDisplay, setprofileToDisplay] = useState(userLogged);
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [isUserLogged, setisUserLogged] = useState(userLogged);

  const tweetContextValue = {
    userLogged,
    tweets,
    setTweets,
    isTagClicked,
    setIsTagClicked,
    filteredTweetsData,
    setFilteredTweetsData,
    profileToDisplay,
    setprofileToDisplay,
    isUserLogged,
    setisUserLogged,
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
