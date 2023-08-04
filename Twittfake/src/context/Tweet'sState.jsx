import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";

const TweetsContext = createContext();

// eslint-disable-next-line react/prop-types
const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const loggedUsername = "Twittfake_Dev";
  const inputPlaceholder = `O czym myślisz, ${loggedUsername}?`;

  return (
    <TweetsContext.Provider
      value={{ tweets, setTweets, loggedUsername, inputPlaceholder }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsContext, TweetsProvider };
