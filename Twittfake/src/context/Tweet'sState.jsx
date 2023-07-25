import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";

const TweetsContext = createContext();

// eslint-disable-next-line react/prop-types
const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState(TweetsData.tweets);
  
  return (
    <TweetsContext.Provider value={{ tweets, setTweets }}>
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsContext, TweetsProvider };
