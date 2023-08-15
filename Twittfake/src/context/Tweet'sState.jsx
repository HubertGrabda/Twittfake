import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";

const TweetsContext = createContext();

// eslint-disable-next-line react/prop-types
const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const [username, setUsername] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(tweets);

  return (
    <TweetsContext.Provider
      value={{
        tweets,
        setTweets,
        username,
        setUsername,
        searchInput,
        setSearchInput,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsContext, TweetsProvider };
