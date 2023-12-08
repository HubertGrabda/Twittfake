import { createContext, useMemo, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";
import PropTypes from "prop-types";

const { tweets: mockTweets } = TweetsData;

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState([...mockTweets]);
  const [filteredTweetsData, setFilteredTweetsData] = useState([...mockTweets]);
  const [isTagClicked, setIsTagClicked] = useState(false);

  const tweetsContextValue = useMemo(
    () => ({
      tweets,
      setTweets,
      isTagClicked,
      setIsTagClicked,
      filteredTweetsData,
      setFilteredTweetsData,
    }),
    [
      tweets,
      setTweets,
      isTagClicked,
      setIsTagClicked,
      filteredTweetsData,
      setFilteredTweetsData,
    ]
  );

  return (
    <TweetsContext.Provider value={tweetsContextValue}>
      {children}
    </TweetsContext.Provider>
  );
};

TweetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TweetsContext, TweetsProvider };
