import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";
import PropTypes from "prop-types";
import AccountService from "../services/AccountService";

const { tweets: mockTweets } = TweetsData;

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const { getUsername } = AccountService();
  const userLogged = getUsername();
  const [tweets, setTweets] = useState([...mockTweets]);
  const [filteredTweetsData, setFilteredTweetsData] = useState([...mockTweets]);
  const [profileToDisplay, setProfileToDisplay] = useState(userLogged);
  const [isTagClicked, setIsTagClicked] = useState(false);

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
