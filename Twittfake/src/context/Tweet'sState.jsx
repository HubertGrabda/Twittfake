import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";

const TweetsContext = createContext();

// eslint-disable-next-line react/prop-types
const TweetsProvider = ({ children }) => {
  const loggedUsername = sessionStorage.getItem("username");
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const [username, setUsername] = useState();
  const [filteredItems, setFilteredItems] = useState(tweets);
  const [whosProfileToDisplay, setWhosProfileToDisplay] =
    useState(loggedUsername);

  return (
    <TweetsContext.Provider
      value={{
        tweets,
        setTweets,
        username,
        setUsername,
        filteredItems,
        setFilteredItems,
        whosProfileToDisplay,
        setWhosProfileToDisplay,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsContext, TweetsProvider };
